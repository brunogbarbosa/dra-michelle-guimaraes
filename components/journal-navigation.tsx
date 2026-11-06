'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { site, findProcedure } from '@/data/site';
import { procedureAreas } from '@/data/procedure-journal';
import styles from './procedure-journal.module.css';

export function JournalNavigation() {
  const [active, setActive] = useState('facial');
  const [selected, setSelected] = useState('');
  useEffect(() => {
    const readHash = () => {
      const id = window.location.hash.slice(1);
      const procedure = findProcedure(id);
      if (procedure && procedure.id !== id) {
        window.history.replaceState(null, '', `#${procedure.id}`);
        document.getElementById(procedure.id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
      setSelected(procedure?.id ?? '');
      if (procedure) setActive(procedure.category);
      else if (procedureAreas.some(area => area.id === id)) setActive(id);
    };
    readHash();
    window.addEventListener('hashchange', readHash);
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-18% 0px -65% 0px', threshold: 0 });
    procedureAreas.forEach(area => { const element = document.getElementById(area.id); if (element) observer.observe(element); });
    return () => { observer.disconnect(); window.removeEventListener('hashchange', readHash); };
  }, []);
  return <nav className={styles.navigation} aria-label="Índice da revista" id="indice">
    <div className={styles.navigationInner}><div className={styles.areaLinks}>{procedureAreas.map(area => <a href={`#${area.id}`} key={area.id} aria-current={active === area.id ? 'location' : undefined}>{area.title}</a>)}</div>
      <label className={styles.procedurePicker}><span>BUSCAR PROCEDIMENTO</span><div><select aria-label="Escolher procedimento na revista" value={selected} onChange={event => { if (event.target.value) { setSelected(event.target.value); window.location.hash = event.target.value; } }}><option value="" disabled>Escolha um procedimento</option>{procedureAreas.map(area => <optgroup key={area.id} label={area.title}>{site.procedures.filter(item => item.category === area.id).map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</optgroup>)}</select><ChevronDown size={16}/></div></label>
    </div>
  </nav>;
}
