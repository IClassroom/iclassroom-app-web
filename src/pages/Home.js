import React from "react";
import { MainHeader } from "../components/MainHeader";
import { ClassCard } from "../components/ClassCard";
import { QuestionCard } from "../components/QuestionCard";
 
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
            Dúvidas em aberto
          </h4>
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px'}} className="flex gap-10">
            <QuestionCard className="Turma 1" userName="Vinicius Costa" comment="Como consigo instalar o Java 14?" commentNumber="2" />
            <QuestionCard className="Turma 2" userName="Yago Taveiros" comment="Como consigo instalar o Python?" commentNumber="9" />
            <QuestionCard className="Turma 1" userName="Túlio Cerqueira" comment="Como consigo instalar o C/C++++++++++?" commentNumber="11" />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;
