'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { PLATFORMS } from '../data/platforms';
import { SERVER_SCHEMA } from '../data/server-schema';
import { STORAGE_SCHEMA } from '../data/storage-schema';

import type { ConfigBlock, ConfigValues, PlatformId } from '../types/configurator.types';

type Step = 1 | 2 | 3 | 4;

export function useConfigurator() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [step, setStep] = useState<Step>(1);
  const [platform, setPlatform] = useState<PlatformId | null>(null);
  const [brand, setBrand] = useState<string | null>(null);
  const [values, setValues] = useState<ConfigValues>({});
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const urlPlatform = searchParams.get('platform');
    const urlBrand = searchParams.get('brand');
    const success = searchParams.get('success');

    if (success) {
      const savedConfig = loadConfig();

      if (savedConfig) {
        setPlatform(savedConfig.platform);
        setBrand(savedConfig.brand);
        setValues(savedConfig.values);
      }

      setStep(4);
      return;
    }

    if (!urlPlatform) {
      setPlatform(null);
      setBrand(null);
      setStep(1);
      return;
    }

    const isValidPlatform = urlPlatform === 'servers' || urlPlatform === 'storage';

    if (!isValidPlatform) {
      setPlatform(null);
      setBrand(null);
      setStep(1);

      router.replace(pathname);
      return;
    }

    const parsedPlatform = urlPlatform as PlatformId;

    setPlatform(parsedPlatform);

    if (!urlBrand) {
      setBrand(null);
      setStep(2);
      return;
    }

    setBrand(urlBrand);
    setStep(3);
  }, [searchParams, pathname, router]);

  const schema = useMemo<ConfigBlock[]>(() => {
    console.log(platform);
    if (platform === 'servers') {
      return SERVER_SCHEMA;
    }

    if (platform === 'storage') {
      return STORAGE_SCHEMA;
    }

    return [];
  }, [platform]);

  const updateUrl = useCallback(
    (nextPlatform: PlatformId | null, nextBrand: string | null) => {
      const params = new URLSearchParams();

      if (nextPlatform) {
        params.set('platform', nextPlatform);
      }

      if (nextBrand) {
        params.set('brand', nextBrand);
      }

      const query = params.toString();

      router.push(query ? `${pathname}?${query}` : pathname);
    },
    [pathname, router],
  );

  const selectPlatform = (value: PlatformId) => {
    setPlatform(value);
    setBrand(null);
    setValues({});
    setStep(2);

    updateUrl(value, null);
  };

  const selectBrand = (value: string | null) => {
    setBrand(value);
    setStep(3);

    updateUrl(platform, value);
  };

  const setValue = (id: string, value: string | string[]) => {
    setValues((prev) => {
      const next = { ...prev };

      if (value === '' || (Array.isArray(value) && value.length === 0)) {
        delete next[id];
      } else {
        next[id] = value;
      }

      return next;
    });
  };

  const goBack = () => {
    if (step === 3) {
      setBrand(null);
      setStep(2);

      updateUrl(platform, null);

      return;
    }

    if (step === 2) {
      setPlatform(null);
      setBrand(null);
      setValues({});
      setStep(1);

      updateUrl(null, null);

      return;
    }
  };

  const STORAGE_KEY = 'configurator-config';

  function saveConfig() {
    try {
      const config = {
        platform,
        brand,
        values,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch (error) {
      console.error('Не удалось сохранить конфигурацию:', error);
    }
  }

  function loadConfig() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);

      if (!data) {
        return null;
      }

      return JSON.parse(data);
    } catch (error) {
      console.error('Не удалось загрузить конфигурацию:', error);
      return null;
    }
  }

  const onSubmit = () => {
    setIsOpen(true);
    saveConfig();
  };

  const toggleOnOpen = () => {
    setIsOpen(!isOpen);
  };

  const reset = () => {
    setStep(1);
    setPlatform(null);
    setBrand(null);
    setValues({});
    setSidebarCollapsed(false);
    setSubmitted(false);

    router.push(pathname);
  };

  return {
    step,
    isOpen,
    platform,
    brand,

    values,
    schema,

    sidebarCollapsed,
    submitted,

    setStep,
    setPlatform,
    setBrand,
    setValues,
    setSidebarCollapsed,
    setSubmitted,

    onSubmit,
    loadConfig,

    selectPlatform,
    selectBrand,
    setValue,

    toggleOnOpen,

    goBack,
    reset,

    platformData: platform ? PLATFORMS[platform] : null,
  };
}
