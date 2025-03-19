'use client';
import styles from "./page.module.css";
import Image from "next/image";
import Banner from "../../public/banner.jpg"
import Logo from "../../public/barbearia.png"
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  function alterarTema() {
    setTemaEscuro(!temaEscuro);
  }

  return (
    <div className={temaEscuro ? styles.modo_escuro : styles.modo_claro}>

      <header className={styles.header_container}>
        <div>
          <Image src={Logo} className={styles.logo} />
          <button onClick={alterarTema} className={styles.botao}>
            {temaEscuro ? <Sun /> : <Moon />}
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.banner} >
          <Image src={Banner} />
        </section>

        <section className={styles.info}>
          <div >
            <h1>
              Bem-vindo a Barber Shop
            </h1>
            <p className={styles.p}>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
            <p className={styles.p}>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
            <p className={styles.assinatura}>S. Kelly</p>
          </div>
        </section>
      </main>
    </div>
  );
}
