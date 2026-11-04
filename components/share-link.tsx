'use client';

import { useRef, useState, useEffect } from 'react';
import { Check, Link2 } from 'lucide-react';

export function ShareLink({ id, label }: { id: string; label: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'manual'>('idle');
  const [url, setUrl] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    const link = new URL(window.location.href);
    link.hash = id;
    link.search = '';
    setUrl(link.href);
    try {
      await navigator.clipboard.writeText(link.href);
      setStatus('copied');
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setStatus('idle'), 2600);
    } catch {
      setStatus('manual');
    }
  }

  return <div className="share-control">
    <button type="button" className="share-link" onClick={copy} aria-label={`Copiar link de ${label}`}>
      {status === 'copied' ? <Check size={15}/> : <Link2 size={15}/>}
      <span aria-live="polite">{status === 'copied' ? 'Link copiado' : 'Copiar link'}</span>
    </button>
    {status === 'manual' && <label className="share-manual">Selecione e copie o link<input readOnly value={url} onFocus={event => event.currentTarget.select()}/></label>}
  </div>;
}
