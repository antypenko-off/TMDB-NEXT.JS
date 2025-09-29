
'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useGoToGenre = () => {
    const router = useRouter();
    const pathname = usePathname();
    const sp = useSearchParams();

    return (id: number) => {
        const next = new URLSearchParams(sp.toString());
        next.set('genre', String(id));
        next.set('page', '1');
        next.delete('q');

        const search = next.toString();
        router.push(search ? `${pathname}?${search}` : pathname);
    };
};
