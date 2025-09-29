'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useURLSearch() {
    const router = useRouter();
    const pathname = usePathname();
    const sp = useSearchParams();

    const toQS = useCallback(() => new URLSearchParams(sp.toString()), [sp]);

    const pushQS = useCallback(
        (qs: URLSearchParams) => {
            const s = qs.toString();
            router.push(s ? `${pathname}?${s}` : pathname);
        },
        [router, pathname]
    );

    const setParam = useCallback(
        (key: string, val: string | null | undefined) => {
            const qs = toQS();
            if (val == null || val === '') qs.delete(key);
            else qs.set(key, val);
            qs.set('page', '1');
            pushQS(qs);
        },
        [toQS, pushQS]
    );

    const resetPath = useCallback(() => router.push(pathname), [router, pathname]);

    return { sp, toQS, pushQS, setParam, resetPath, pathname, router };
}
