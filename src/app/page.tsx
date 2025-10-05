"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  LineChart,
  Handshake,
  ShieldCheck,
  Building2,
  Target,
  CheckCircle2,
  ChevronRight,
  FileText,
  MessageCircle,
  Leaf,
  Globe2,
  Recycle,
  HeartHandshake,
  Factory,
  Award,
  Mail,
  Users2,
  ClipboardCheck,
} from "lucide-react";

/* ============================================================
   CONTATOS E ARQUIVOS
   ============================================================ */
const WHATS_E164 = "554899832081"; // +55 48 9983-2081 (sem + para wa.me)
const EMAIL = "acolhimento@cuidatoria.com.br";
const preMsg = encodeURIComponent("OlÃ¡! Gostaria de conhecer o patrocÃ­nio do ONG do Futuro.");
const pdfDeckUrl = "/cotas-ong.pdf"; // coloque o arquivo em /public/cotas-ong.pdf

/* ============================================================
   PÃGINA
   ============================================================ */
export default function PatrocinePage() {
  return (
    <main
      className="
      text-brand-ink selection:bg-brand-orange/30 selection:text-brand-ink
      bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(244,165,32,0.10),transparent_60%),radial-gradient(1000px_520px_at_110%_10%,rgba(47,183,173,0.10),transparent_55%)]
    "
    >
      {/* faixa decorativa superior */}
      <div className="h-1.5 bg-gradient-to-r from-brand-orange via-brand-gold to-brand-teal" />
      <Hero />
      <ValueProps />
      <HowItWorks />
      <ESGeODS />
      <ImpactKPIs />
      <SponsorshipTiers />
      <FAQ />
      <FinalCTA />
      {/* faixa decorativa inferior */}
      <div className="h-1.5 bg-gradient-to-r from-brand-teal via-brand-gold to-brand-orange" />

      {/* BotÃµes flutuantes */}
      <FloatContacts />
    </main>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-[520px] w-[520px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(244,165,32,0.26) 0%, rgba(244,165,32,0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 h-[560px] w-[560px] rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(47,183,173,0.28) 0%, rgba(47,183,173,0) 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo-cuidatoria.png" alt="Cuidatoria" width={44} height={44} />
            <Badge className="bg-brand-teal/10 text-brand-teal border-brand-teal/20">
              PatrocÃ­nio com impacto real
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-[1.08]">
            Patrocine o <span className="text-brand-teal">ONG do Futuro</span> e deixe um{" "}
            <span className="relative inline-block px-2 -mx-2">
              <span className="absolute inset-0 -z-10 rounded-xl bg-[linear-gradient(120deg,rgba(244,165,32,0.35),rgba(47,183,173,0.35))]" />
              legado social
            </span>{" "}
            em Santa Catarina
          </h1>

          <p className="mt-5 text-lg md:text-xl text-brand-ink/75 max-w-2xl">
            Aceleramos 100 OSC com tecnologia, mentorias e governanÃ§a. Sua empresa associa a marca a
            resultados mensurÃ¡veis, ESG e ODS â€” com transparÃªncia ponta a ponta.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-gradient-to-r from-brand-teal to-emerald-500 hover:brightness-95 text-white"
            >
              <a
                href={`https://wa.me/${WHATS_E164}?text=${preMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Falar com a equipe
              </a>
            </Button>

            <Button
              asChild
              className="bg-gradient-to-r from-brand-orange to-amber-500 text-white hover:brightness-95"
            >
              <a href={pdfDeckUrl} download className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Baixar Cotas (PDF)
              </a>
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-6 text-brand-ink/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-teal" /> TransparÃªncia &amp; Compliance
            </div>
            <div className="flex items-center gap-2">
              <LineChart className="h-5 w-5 text-brand-orange" /> Indicadores e RelatÃ³rios
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-tr from-brand-teal/30 via-brand-orange/20 to-brand-teal/25 blur-xl" />
            <div className="relative rounded-[28px] p-1 bg-white border border-black/10">
              <div className="rounded-2xl p-6 bg-gradient-to-b from-brand-teal/[0.05] to-brand-orange/[0.06]">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Sparkles, label: "Tecnologia social" },
                    { icon: Target, label: "Metas claras" },
                    { icon: Building2, label: "HUB presencial" },
                    { icon: ShieldCheck, label: "GovernanÃ§a" },
                    { icon: LineChart, label: "MÃ©tricas em tempo real" },
                    { icon: Handshake, label: "ConexÃ£o OSCâ€“empresa" },
                  ].map(({ icon: Icon, label }, i) => (
                    <Card
                      key={i}
                      className="bg-white border-transparent shadow-[0_0_0_1px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_30px_rgba(47,183,173,0.12)] transition"
                    >
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-[conic-gradient(at_50%_50%,rgba(244,165,32,0.15),rgba(47,183,173,0.15))] flex items-center justify-center">
                          <Icon className="h-5 w-5 text-brand-teal" />
                        </div>
                        <span className="text-brand-ink/90">{label}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   PROPOSTAS DE VALOR
   ============================================================ */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-10 w-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
        <Sparkles className="h-5 w-5 text-brand-teal" />
      </div>
      <h2 className="text-3xl md:text-4xl font-black">{children}</h2>
    </div>
  );
}

function ValueProps() {
  const items = [
    {
      icon: HeartHandshake,
      title: "Branding com propÃ³sito",
      desc: "Associe sua marca a entregas concretas e cobertura positiva na mÃ­dia local.",
    },
    {
      icon: ShieldCheck,
      title: "Risco reduzido",
      desc: "Processos padronizados, checklists e trilha de compliance na execuÃ§Ã£o.",
    },
    {
      icon: LineChart,
      title: "MensuraÃ§Ã£o",
      desc: "Dashboard com indicadores por OSC, etapa, municÃ­pio e perÃ­odo.",
    },
    {
      icon: Handshake,
      title: "Engajamento",
      desc: "AÃ§Ãµes no HUB, voluntariado corporativo e certificaÃ§Ã£o de apoio.",
    },
  ] as const;

  return (
    <section className="py-12 border-y border-black/[0.06] bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle>Por que patrocinar</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
              >
                <Card className="bg-white border-black/10 hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-brand-teal/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-brand-teal" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
                    <p className="mt-2 text-brand-ink/70">{it.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COMO FUNCIONA â€” NOVOS CARDS TECH
   ============================================================ */
function StepCard({
  index,
  title,
  desc,
  Icon,
}: {
  index: number;
  title: string;
  desc: string;
  Icon: React.ElementType;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group relative"
    >
      <div
        aria-hidden
        className="absolute -inset-[1.5px] rounded-2xl opacity-60 group-hover:opacity-100 blur-[1px] transition
                   animate-[spin_8s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(47,183,173,0.65), rgba(244,165,32,0.65), rgba(212,175,55,0.65), rgba(47,183,173,0.65))",
        }}
      />
      <div
        className="relative rounded-2xl bg-white/80 backdrop-blur-md border border-black/10
                   shadow-sm group-hover:shadow-xl transition will-change-transform
                   hover:-translate-y-0.5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 1.6px)",
          backgroundSize: "18px 18px",
        }}
      >
        <div className="h-[3px] rounded-t-2xl bg-gradient-to-r from-brand-teal/50 via-brand-gold/60 to-brand-orange/60 opacity-70" />
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="absolute -inset-1 rounded-xl bg-brand-teal/25 blur-md opacity-40 group-hover:opacity-70 transition" />
              <div className="relative h-11 w-11 rounded-xl flex items-center justify-center border border-brand-teal/30 bg-[conic-gradient(at_50%_50%,rgba(244,165,32,0.18),rgba(47,183,173,0.18))]">
                <Icon className="h-6 w-6 text-brand-teal" />
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-teal/12 border border-brand-teal/25 text-brand-teal">
              {index + 1}Âª etapa
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-brand-ink/75">{desc}</p>
        </div>
        <div className="h-[3px] rounded-b-2xl bg-gradient-to-r from-transparent via-brand-teal/60 to-brand-orange/60 opacity-70" />
      </div>
    </motion.div>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "DiagnÃ³stico DIALOGICS",
      desc: "AvaliaÃ§Ã£o em <1 min por OSC, mapeando maturidade e prioridades.",
      Icon: FileText,
    },
    {
      title: "RegularizaÃ§Ã£o",
      desc: "Apoio jurÃ­dico-contÃ¡bil, checklists e conferÃªncias documentais.",
      Icon: Building2,
    },
    {
      title: "CapacitaÃ§Ã£o",
      desc: "Mentorias prÃ¡ticas, portfÃ³lio, apresentaÃ§Ãµes e evidÃªncias de impacto.",
      Icon: Users2,
    },
    {
      title: "Projetos & Editais",
      desc: "Edital Certo: aderÃªncia projetoâ€“edital, revisÃ£o tÃ©cnica e submissÃ£o.",
      Icon: Target,
    },
    {
      title: "PrestaÃ§Ã£o de contas",
      desc: "Modelos, fluxos e treinamento para executar e comprovar corretamente.",
      Icon: ClipboardCheck,
    },
    {
      title: "CertificaÃ§Ã£o & ConexÃ£o",
      desc: "Evento final e aproximaÃ§Ã£o OSCâ€“empresas para continuidade.",
      Icon: Award,
    },
  ] as const;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle>Como funciona</SectionTitle>
        <p className="mt-2 text-brand-ink/70 max-w-2xl">
          Metodologia em 6 etapas, combinando tecnologia proprietÃ¡ria, mentoria executiva e
          governanÃ§a.
        </p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <StepCard key={i} index={i} title={s.title} desc={s.desc} Icon={s.Icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ESG & ODS
   ============================================================ */
function ESGeODS() {
  const items = [
    {
      icon: Globe2,
      title: "ODS 16 & 17",
      desc: "InstituiÃ§Ãµes eficazes, parcerias e fortalecimento do 3Âº setor.",
    },
    {
      icon: Leaf,
      title: "ESG â€” Social (S)",
      desc: "Capilaridade social com governanÃ§a e mÃ©tricas claras.",
    },
    {
      icon: Recycle,
      title: "ESG â€” GovernanÃ§a (G)",
      desc: "Conformidade e prestaÃ§Ã£o de contas padronizada.",
    },
  ] as const;

  return (
    <section className="py-14 border-y border-black/[0.06] bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
            <Factory className="h-5 w-5 text-brand-teal" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black">ESG &amp; ODS na prÃ¡tica</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((x, i) => {
            const Icon = x.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
              >
                <Card className="bg-white border-black/10">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-brand-teal/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-brand-teal" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{x.title}</h3>
                    <p className="mt-2 text-brand-ink/70">{x.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   KPIs
   ============================================================ */
function KPI({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 text-center">
      <div className="text-3xl md:text-4xl font-black text-brand-teal">{k}</div>
      <div className="text-brand-ink/70">{v}</div>
    </div>
  );
}

function ImpactKPIs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle>Impacto esperado</SectionTitle>
        <p className="mt-2 text-brand-ink/70 max-w-2xl">
          Indicadores para acompanhamento de gabinete, empresas e sociedade â€” com relatÃ³rios mensais.
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <KPI k="100" v="OSCs diagnosticadas" />
          <KPI k="â‰¥ 80" v="OSCs regularizadas" />
          <KPI k="â‰¥ 70" v="projetos aptos a edital" />
          <KPI k="â‰¥ 50" v="submissÃµes a editais" />
          <KPI k="9" v="meses de operaÃ§Ã£o" />
          <KPI k="1" v="HUB fÃ­sico ativo" />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COTAS â€” CARD (com selo visÃ­vel)
   ============================================================ */
function Tier({
  destaque = false,
  titulo,
  preco,
  bullets,
  whatsE164 = WHATS_E164,
}: {
  destaque?: boolean;
  titulo: string;
  preco: string;
  bullets: string[];
  whatsE164?: string;
}) {
  const msg = encodeURIComponent(`OlÃ¡! Tenho interesse na cota ${titulo} do ONG do Futuro.`);
  return (
    <div className="relative group">
      {/* AURA / SOMBRA COLORIDA AO HOVER */}
      <div
        aria-hidden
        className={`absolute -inset-2 rounded-[28px] blur-xl transition ${
          destaque ? "opacity-70 group-hover:opacity-90" : "opacity-0 group-hover:opacity-60"
        }`}
        style={{
          background:
            "conic-gradient(from 0deg, rgba(47,183,173,.18), rgba(244,165,32,.18), rgba(212,175,55,.18), rgba(47,183,173,.18))",
        }}
      />

      <Card
        className={`relative bg-white border rounded-3xl transition ${
          destaque
            ? "border-brand-gold shadow-[0_20px_60px_rgba(0,0,0,.08)] overflow-visible"
            : "border-black/10 shadow-sm hover:shadow-md overflow-hidden"
        }`}
      >
        {/* BADGE â€œMAIS POPULARâ€ */}
        {destaque && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
            <span className="relative inline-flex items-center gap-2 px-3 py-[6px] rounded-full text-xs font-bold text-white shadow">
              <span className="absolute inset-0 -z-10 rounded-full blur-sm opacity-80 bg-[conic-gradient(at_50%_50%,rgba(244,165,32,.9),rgba(47,183,173,.9),rgba(212,175,55,.9),rgba(244,165,32,.9))]" />
              <span className="bg-gradient-to-r from-brand-gold via-brand-orange to-brand-teal bg-clip-text text-transparent mix-blend-screen">
                Mais popular
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            </span>
          </div>
        )}

        <CardContent className="p-7">
          <h3 className="text-xl font-bold">{titulo}</h3>
          <div className="mt-1 text-[32px] leading-none font-black text-brand-ink">
            <span className="bg-gradient-to-r from-brand-teal to-brand-orange bg-clip-text text-transparent">
              {preco}
            </span>
          </div>

          <ul className="mt-4 space-y-2 text-brand-ink/85 text-[15px]">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-teal mt-0.5" />
                {b}
              </li>
            ))}
          </ul>

          {/* BOTÃƒO VISUAL / GRANDE / GRADIENTE */}
          <a
            href={`https://wa.me/${whatsE164}?text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center w-full h-12 rounded-2xl text-white font-semibold shadow-lg transition group/btn bg-[linear-gradient(135deg,#2FB7AD,40%,#F4A520)] hover:brightness-110 active:scale-[.99]"
          >
            <span className="relative">
              <span className="absolute -inset-2 rounded-xl bg-white/15 blur opacity-0 group-hover/btn:opacity-100 transition" />
              Quero patrocinar
            </span>
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>

          <div className="mt-6 h-[3px] rounded-xl bg-gradient-to-r from-brand-teal/70 via-brand-gold/70 to-brand-orange/70" />
        </CardContent>
      </Card>
    </div>
  );
}

/* ============================================================
   COTAS â€” SEÃ‡ÃƒO
   ============================================================ */
function SponsorshipTiers() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
            <Award className="h-5 w-5 text-brand-teal" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black">Cotas de patrocÃ­nio</h2>
        </div>

        <p className="text-brand-ink/70 max-w-3xl">
          OpÃ§Ãµes acessÃ­veis e modulÃ¡veis para empresas de diferentes portes. Todas incluem
          visibilidade, relatÃ³rios e certificaÃ§Ã£o de apoio.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <Tier
              titulo="Amiga â€” R$ 25 mil"
              preco="R$ 25.000"
              bullets={[
                "Logo em materiais digitais",
                "Certificado de apoio",
                "RelatÃ³rio consolidado (trimestral)",
                "AtivaÃ§Ã£o de voluntariado (1 aÃ§Ã£o)",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <Tier
              destaque
              titulo="Parceira â€” R$ 50 mil"
              preco="R$ 50.000"
              bullets={[
                "Destaque em site e evento",
                "RelatÃ³rios mensais + dashboard",
                "2 ativaÃ§Ãµes de voluntariado",
                "Co-brand em oficinas selecionadas",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <Tier
              titulo="Master â€” R$ 120 mil"
              preco="R$ 120.000"
              bullets={[
                "Cota master (topo de marca)",
                "RelatÃ³rios mensais + acesso a dados",
                "3+ ativaÃ§Ãµes de voluntariado",
                "Naming do HUB* ou trilha (sob aprovaÃ§Ã£o)",
              ]}
            />
          </motion.div>
        </div>

        <div className="mt-4 text-xs text-brand-ink/60">
          *Naming sujeito a disponibilidade, regras e termo de parceria.
        </div>

        <div className="mt-8">
          <Button
            asChild
            className="bg-gradient-to-r from-brand-gold to-brand-orange text-white hover:brightness-95"
          >
            <a href={pdfDeckUrl} download className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Baixar One-Pager (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
function FAQ() {
  const qs = [
    {
      q: "Como acompanho os resultados?",
      a: "VocÃª receberÃ¡ relatÃ³rios periÃ³dicos e acesso a um dashboard com indicadores por OSC, etapa e municÃ­pio.",
    },
    {
      q: "Ã‰ possÃ­vel ativar voluntariado corporativo?",
      a: "Sim. Organizamos aÃ§Ãµes no HUB e em eventos temÃ¡ticos, com registro audiovisual e certificaÃ§Ã£o.",
    },
    {
      q: "O patrocÃ­nio pode ser fracionado?",
      a: "Podemos modular as entregas para adequar o investimento por perÃ­odo (mensal/trimestral).",
    },
    {
      q: "HÃ¡ contrapartidas de visibilidade?",
      a: "Sim. PresenÃ§a de marca em comunicaÃ§Ã£o, eventos e materiais, de acordo com a cota.",
    },
  ] as const;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle>Perguntas frequentes</SectionTitle>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {qs.map((item, i) => (
            <Card key={i} className="bg-white border-black/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-2 text-brand-ink/75">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA FINAL
   ============================================================ */
function FinalCTA() {
  return (
    <section className="py-16 border-t border-black/[0.06] bg-gradient-to-b from-[#fafafa] to-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-4xl font-black">
            Vamos construir esse legado em Santa Catarina?
          </h2>
          <p className="mt-3 text-brand-ink/75 max-w-2xl">
            Patrocinar o ONG do Futuro Ã© investir em governanÃ§a, eficiÃªncia e impacto imediato no
            territÃ³rio. Sua marca no centro de entregas que mudam a realidade das OSCs e da
            comunidade.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-gradient-to-r from-brand-teal to-emerald-500 hover:brightness-95 text-white"
            >
              <a
                href={`https://wa.me/${WHATS_E164}?text=${preMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Falar com a equipe
              </a>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-brand-orange to-amber-500 text-white hover:brightness-95"
            >
              <a href={pdfDeckUrl} download className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Baixar Cotas (PDF)
              </a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-brand-teal/30 via-black/5 to-brand-orange/30">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-black/10">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
                <Image
                  src="/images/cuidatoria-hub.png"
                  alt="Cuidatoria HUB â€” espaÃ§o de acolhimento"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 520px"
                  priority
                />
              </div>
              <div className="px-4 py-2 text-sm text-brand-ink/80 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-brand-teal" />
                HUB do 3Âº Setor â€” Cuidatoria
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FLOAT CONTACTS (WHATS + EMAIL)
   ============================================================ */
function FloatContacts() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* E-mail chip */}
      <a
        href={`mailto:${EMAIL}`}
        aria-label="Enviar e-mail"
        className="group rounded-full px-4 h-10 inline-flex items-center gap-2 bg-white/95 text-brand-ink border border-black/10 shadow-md hover:shadow-lg hover:bg-white transition"
      >
        <Mail className="h-5 w-5 text-brand-teal" />
        <span className="text-sm font-medium">{EMAIL}</span>
      </a>

      {/* WhatsApp cÃ­rculo */}
      <a
        href={`https://wa.me/${WHATS_E164}?text=${preMsg}`}
        aria-label="Falar no WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <span className="absolute -inset-2 rounded-full bg-brand-teal/40 blur-md opacity-80 group-hover:opacity-100 transition" />
        <Button className="relative rounded-full h-14 w-14 p-0 bg-gradient-to-r from-brand-teal to-emerald-500 hover:brightness-95 shadow-xl">
          <MessageCircle className="h-7 w-7 text-white" />
        </Button>
      </a>
    </div>
  );
}









