export class Education{
     institution: string;
     courseName: string;
     startDate: string;
     endDate: string;
     description: string;

     constructor(institution: string, courseName: string, startDate: string, endDate: string, description: string){
          this.institution = institution;
          this.courseName = courseName;
          this.startDate = startDate;
          this.endDate = endDate;
          this.description = description;
     }
}

export class Job{
     institution: string;
     courseName: string;
     startDate: string;
     endDate: string;
     description: string;

     constructor(institution: string, courseName: string, startDate: string, endDate: string, description: string){
          this.institution = institution;
          this.courseName = courseName;
          this.startDate = startDate;
          this.endDate = endDate;
          this.description = description;
     }
}

export class Project{
     name: string;
     description: string;
     languages: string[];
     imgSrc: string;
     link: string;

     constructor(name: string, languages: string[], description: string, imgSrc: string, link: string){
          this.name = name;
          this.description = description;
          this.languages = languages;
          this.imgSrc = imgSrc;
          this.link = link;
     }
}

export function education(){
     var data = [
          new Education("ETEC Doutora Ruth Cardoso", "Técnico em Informática", "Jan/2018", "Dez/2019", "Curso técnico de 3 semestres focado no desenvolvimento prático."),
          new Education("FATEC Rubens Lara", "Análise e Desenvolvimento de Sistemas", "Jan/2020", "Dez/2022", "Graduação focada na análise e desenvolvimento prático de sistemas."),
     ]

     return [...data];
}

export function job(){
     var data = [
          new Job("ModalGR", "Estágio de Desenvolvimento .NET", "Abr/2022", "Jun/2022", "- Desenvolvimento de scripts em C#;\n- Desenvolvimento de APIs utilizando .NET com frameworks como Entity e Dapper;\n- Análise de problemas reais para desevolvimento de soluções por meio da tecnologia;\n- Elaboração de projetos utilizando OPCRouter com integração do Kepware, e procedures MSSQL.\n- Desenvolvimento de scripts SQL, (procedures, tabelas, triggers, entre outros) utilizando Microsoft Server Managment;\n- Testes de APIs;- Desenvolvimento de scripts em C#; - Desenvolvimento de APIs utilizando .NET com frameworks como Entity e Dapper; - Análise de problemas reais para desevolvimento de soluções por meio da tecnologia; - Elaboração de projetos utilizando OPCRouter com integração do Kepware, e procedures MSSQL. - Desenvolvimento de scripts SQL, (procedures, tabelas, triggers, entre outros) utilizando Microsoft Server Managment; - Testes de APIs;\nCompetências: .NET Framework · ASP.NET · Microsoft SQL Server"),
     ]

     return [...data];
}

export function project(){
     var data = [
          new Project("Cruzadinha", ["Flutter", "Firebase"], "O projeto foi inspirado em Wordle e Term.ooo e, como tal, um novo conjunto de palavras é classificado todos os dias. O objetivo principal é descobrir a palavra marcada com uma estrela, e para isso, você precisa descobrir as palavras marcadas por números, verificando as dicas.", "https://i.imgur.com/LEoLdzG.png", "https://github.com/alisuetal/cruzadinha"),
          new Project("Giffty", ["Flutter"], "Você pode definir toda a lista de convidados com suas sugestões de presentes e preços aproximados gratuitamente. Não há necessidade de e-mails ou contas. Os resultados dos pares estão sempre certos, e você pode até definir Dark Pairs.", "https://i.imgur.com/iPIXCCR.png", "https://github.com/alisuetal/giffty"),
          new Project("Portfólio", ["React.JS"], "Portfólio com propósito de mostrar minha tragetória, desde minha educação, até os projetos e experiências profissionais.", "https://i.imgur.com/ciJSfuX.png", "https://github.com/alisuetal/portfolio"),
     ]

     return [...data];
}