'use client';
import { useEffect, useMemo, useState, useCallback, FormEvent } from 'react';
import { useURLSearch } from './useURLSearch';

export function useSearchQuery() {
    const { sp, toQS, pushQS } = useURLSearch();
    const qFromUrl = useMemo(() => sp.get('q') ?? '', [sp]);
    const [query, setQuery] = useState(qFromUrl);

    useEffect(() => setQuery(qFromUrl), [qFromUrl]);

    const onSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();
            const next = toQS();
            const trimmed = query.trim();
            if (trimmed) next.set('q', trimmed);
            else next.delete('q');
            next.set('page', '1');
            pushQS(next);
        },
        [query, toQS, pushQS]
    );

    return { query, setQuery, onSubmit };
}
