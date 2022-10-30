import React from "react";
import { MainHeader } from "../components/MainHeader";
import { ClassCard } from "../components/ClassCard";
 
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
            <ClassCard className="Turma 1 ssssssssqew qdqwdqrfqefqew fqw qwrfq" />
            <ClassCard className="Turma 2" />
            <ClassCard />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;
