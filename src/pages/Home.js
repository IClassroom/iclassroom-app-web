import React from "react";
import { MainHeader } from "../components/MainHeader";
import { ClassCard } from "../components/ClassCard";
import { QuestionCard } from "../components/QuestionCard";
import { ActivityCard } from "../components/ActivityCard";
 
function Home() {
  return (
    <div>
      <MainHeader />
      <main role='main' style={{display: "flex", flexDirection: "column", marginLeft: "172px",}}>
        <section>
          <h4 style={{fontSize: '18px', fontWeight: 'normal', margin: '0px', marginLeft: '44px', marginTop: '96px'}}>
            Turmas
          </h4>
          <div style={{display: 'flex', gap: '40px', marginTop: '30px'}} className="flex gap-10">
            <ClassCard className="Turma 1" />
            <ClassCard className="Turma 2" />
            <ClassCard />
          </div>
        </section>

        <section>
          <h4 style={{fontSize: '18px', fontWeight: 'normal', margin: '0px', marginLeft: '44px', marginTop: '96px'}}>
            {"Atividades em aberto" || "Atividades pendentes"}
          </h4>
          <div style={{display: 'flex', gap: '40px', marginTop: '30px'}}>
            <ActivityCard className="Turma 1" description="João pretende armazenar uma coleção de dados referentes a cerca de um milhão de pessoas..." daysAgo="2" attachment={"Attachment 1"} />
            <ActivityCard className="Turma 2" description="João tem uma base de dados com 500 registros imcompletos, implemente um algoritmo que preencha os dados..." daysAgo="9" attachment={"Attachment 2"} />
          </div>
          <div style={{ marginLeft: '44px' }}>
            <h5 style={{ fontSize: '18px', color: "#2E3760" }}>Ver todos</h5>
          </div>
        </section>

        <section>
          <h4 style={{fontSize: '18px', fontWeight: 'normal', margin: '0px', marginLeft: '44px', marginTop: '96px'}}>
            Dúvidas em aberto
          </h4>
          <div style={{display: 'grid', gridTemplateColumns:'repeat(2, 478px  )', gridTemplateRows: 'repeat(2, 1fr)', gap: '20px', marginTop: '30px'}}>
            <QuestionCard className="Turma 1" userName="Vinicius Costa" comment="Como consigo instalar o Java 14?" commentNumber="2" />
            <QuestionCard className="Turma 2" userName="Yago Taveiros" comment="Como consigo instalar o Python?" commentNumber="9" />
            <QuestionCard className="Turma 1" userName="Túlio Cerqueira" comment="Como consigo instalar o C/C++++++++++?" commentNumber="11" />
          </div>
          <div style={{ marginLeft: '44px' }}>
            <h5 style={{ fontSize: '18px', color: "#2E3760" }}>Ver todos</h5>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;
