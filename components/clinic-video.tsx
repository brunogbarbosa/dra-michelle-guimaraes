'use client';

import { useRef, useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import styles from './clinic-map.module.css';

export function ClinicVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);

  async function startVideo() {
    setFailed(false);
    setStarted(true);
    try { await video.current?.play(); video.current?.focus(); }
    catch { setStarted(false); setFailed(true); }
  }

  return <figure className={styles.film}>
    <div className={styles.videoStage}>
      <video ref={video} controls={started} playsInline preload="none" poster="/images/clinica-video-capa.webp" width={480} height={848} tabIndex={0} aria-label="Vídeo: acesso e apresentação da clínica" aria-describedby="clinic-video-description" onPlay={() => setStarted(true)} onError={() => setFailed(true)}>
        <source src="/videos/visita-clinica.mp4" type="video/mp4"/>
        Seu navegador não oferece reprodução de vídeo. Use o link abaixo para abrir a gravação.
      </video>
      {!started && <button className={styles.playButton} type="button" onClick={startVideo} aria-label="Assistir ao vídeo da clínica"><span className={styles.playCircle}><Play size={23} fill="currentColor" strokeWidth={1}/></span><span className={styles.playCopy}>ENTRE COM A GENTE<small>Conheça a clínica · 0:51</small></span></button>}
    </div>
    <figcaption><span>UM OLHAR POR DENTRO</span><a href="/videos/visita-clinica.mp4" target="_blank" rel="noreferrer">Abrir vídeo<ArrowUpRight size={14}/></a></figcaption>
    {failed && <p className={styles.videoError} role="alert">Não foi possível iniciar a reprodução. Você pode tentar novamente ou abrir o vídeo pelo link acima.</p>}
  </figure>;
}
