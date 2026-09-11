import re

def edit(path, pairs):
    s = open(path, encoding='utf8').read()
    for old, new in pairs:
        if old not in s:
            raise SystemExit(f"NOT FOUND in {path}:\n{old}")
        s = s.replace(old, new)
    open(path, 'w', encoding='utf8').write(s)

edit('src/components/Hero.jsx', [
 ('Sociedade de Advogados · São José do Rio Preto, SP · Atende todo o Brasil',
  'Sociedade de Advogados · São José do Rio Preto, SP · Atuação em todo o território nacional'),
 ('O seu caso merece <em className="italic text-accent">atenção de verdade.</em>',
  'Seu caso merece <em className="italic text-accent">o rigor técnico que a advocacia exige.</em>'),
 ('''            A Gimenes e Pires acompanha pessoas e empresas em todo o Brasil em
            questões cíveis, empresariais e contenciosas. Explique a sua situação
            pelo WhatsApp — a gente diz, com clareza, como pode ajudar.''',
  '''            A Gimenes e Pires presta assessoria jurídica a pessoas físicas e
            jurídicas em todo o território nacional, com atuação consultiva e
            contenciosa. Relate a sua situação pelo WhatsApp e receba uma
            orientação clara sobre os próximos passos.'''),
 ('mensagem="Olá! Vim pelo site e gostaria de explicar a minha situação para o escritório.">\n            Explicar meu caso agora',
  'mensagem="Olá, vim pelo site e gostaria de relatar a minha situação ao escritório.">\n            Expor meu caso agora'),
 ('Ver como ajudamos', 'Conhecer nossa atuação'),
])

edit('src/components/Servicos.jsx', [
 ('titulo: "Contratos",\n    texto: "Elaboração e revisão de contratos — comerciais, de prestação de serviço e entre sócios.",',
  'titulo: "Contratos",\n    texto: "Elaboração, revisão e negociação de contratos empresariais, de prestação de serviços e societários.",'),
 ('titulo: "Cobranças e negociações",\n    texto: "Notificação extrajudicial, acordo e recuperação de valores antes de virar processo.",',
  'titulo: "Cobranças e negociações",\n    texto: "Notificação extrajudicial, negociação e recuperação de créditos, com solução amigável sempre que possível.",'),
 ('titulo: "Estruturação societária",\n    texto: "Abertura, alteração e organização de sociedades, com acordo de sócios bem feito.",',
  'titulo: "Estruturação societária",\n    texto: "Constituição, alteração e reorganização de sociedades, com elaboração de acordos de sócios.",'),
 ('titulo: "Ações judiciais",\n    texto: "Condução do processo do início ao fim, com acompanhamento de cada andamento.",',
  'titulo: "Ações judiciais",\n    texto: "Condução de ações judiciais do início ao trânsito em julgado, com acompanhamento de cada andamento processual.",'),
 ('01 — Como podemos ajudar', '01 — Áreas de atuação'),
 ('Do <em className="italic text-accent">planejamento</em> à sala de audiência.',
  'Da <em className="italic text-accent">consultoria preventiva</em> à sala de audiência.'),
 ('mensagem="Olá! Vi os serviços no site e queria entender qual se aplica ao meu caso.">\n            Não sei por onde começar — me ajudem',
  'mensagem="Olá, consultei as áreas de atuação no site e gostaria de entender qual se aplica ao meu caso.">\n            Preciso de orientação sobre o meu caso'),
])

edit('src/components/Sobre.jsx', [
 ('texto:\n      "Atua com rigor técnico e proximidade, buscando sempre a solução mais clara e segura para cada cliente.",',
  'texto:\n      "Atua com rigor técnico e proximidade, priorizando a solução mais clara e juridicamente segura para cada cliente.",'),
 ('texto:\n      "Conduz cada caso com atenção aos detalhes e compromisso com o resultado, do primeiro contato até a decisão final.",',
  'texto:\n      "Conduz cada caso com precisão técnica e compromisso com o resultado, do primeiro atendimento até o desfecho final.",'),
 ('texto: "Traz experiência e visão estratégica para a definição do melhor caminho em cada processo.",',
  'texto: "Contribui com experiência e visão estratégica na definição do melhor curso de ação em cada processo.",'),
 ('texto: "Cuida de cada etapa com organização e cuidado, mantendo o cliente sempre informado.",',
  'texto: "Zela por cada etapa processual com organização e rigor, mantendo o cliente permanentemente informado.",'),
 ('Você fala direto com <em className="italic text-accent">quem cuida do caso.</em>',
  'Você conversa diretamente com <em className="italic text-accent">quem conduz o seu caso.</em>'),
 ('''            O escritório é dos sócios, e é assim que trabalham desde o primeiro caso:
            cada processo passa por quem está à frente dele — não por protocolo,
            por escolha.''',
  '''            A condução dos casos é feita diretamente pelos profissionais
            responsáveis, desde o primeiro atendimento — por escolha do
            escritório, não por protocolo.'''),
])

edit('src/components/Confianca.jsx', [
 ('titulo: "Sem juridiquês",\n    texto: "A gente explica o que está acontecendo e quais são as opções, em português claro.",',
  'titulo: "Sem juridiquês",\n    texto: "Explicamos os fatos e as opções disponíveis em linguagem clara, sem juridiquês.",'),
 ('titulo: "Toda a equipe em cada caso",\n    texto: "A equipe acompanha o processo de perto — não só a estratégia inicial.",',
  'titulo: "Acompanhamento próximo em cada etapa",\n    texto: "A equipe acompanha o processo de perto, do planejamento inicial à conclusão.",'),
 ('titulo: "Você sempre sabe onde está",\n    texto: "Cliente informado a cada andamento relevante, sem precisar ligar cobrando notícia.",',
  'titulo: "Transparência processual",\n    texto: "O cliente é informado a cada andamento relevante, sem necessidade de solicitar atualizações.",'),
 ('titulo: "Sigilo total",\n    texto: "O que você conta fica entre você e o escritório. Seus dados são tratados conforme a LGPD.",',
  'titulo: "Confidencialidade e sigilo",\n    texto: "As informações compartilhadas são protegidas pelo sigilo profissional e tratadas em conformidade com a LGPD.",'),
 ('Você não precisa <em className="italic text-accent">resolver isso sozinho.</em>',
  'Você não precisa <em className="italic text-accent">enfrentar essa questão sozinho.</em>'),
 ('mensagem="Olá! Gostaria de conversar sobre o meu caso com o escritório."\n          >\n            Conversar agora, sem compromisso',
  'mensagem="Olá, gostaria de solicitar uma orientação inicial sobre o meu caso."\n          >\n            Solicitar orientação inicial'),
])

edit('src/components/FAQ.jsx', [
 ('q: "A primeira conversa tem custo?",\n    a: "O contato inicial pelo WhatsApp para entender a sua situação e explicar como podemos ajudar é sem compromisso. Honorários só são combinados depois, por escrito, se você decidir seguir.",',
  'q: "O primeiro atendimento tem custo?",\n    a: "O contato inicial, destinado à análise preliminar da situação, não possui custo. Os honorários são definidos posteriormente, por escrito, caso haja decisão de contratação dos serviços.",'),
 ('q: "O escritório atende só em São José do Rio Preto?",\n    a: "O atendimento presencial é em São José do Rio Preto, mas acompanhamos clientes de todo o Brasil por videochamada e WhatsApp, com a mesma proximidade.",',
  'q: "O atendimento é restrito a São José do Rio Preto?",\n    a: "O atendimento presencial ocorre em São José do Rio Preto, mas o escritório presta assistência a clientes de todo o território nacional por videochamada e WhatsApp, com o mesmo nível de proximidade.",'),
 ('q: "Vocês atendem pessoa física ou só empresa?",\n    a: "Os dois. Pequenas e médias empresas são boa parte dos casos, mas também cuidamos de contratos, cobranças e ações de pessoas físicas.",',
  'q: "O escritório atende pessoas físicas ou apenas empresas?",\n    a: "Ambos. Pequenas e médias empresas representam parte significativa dos casos, mas também são conduzidos contratos, cobranças e ações envolvendo pessoas físicas.",'),
 ('q: "Quanto tempo demora um processo?",\n    a: "Depende do tipo de ação e da vara. Na primeira conversa damos uma estimativa realista para o seu caso — e evitamos processo sempre que dá para resolver por acordo.",',
  'q: "Qual a duração média de um processo?",\n    a: "O prazo depende da natureza da ação e da vara responsável. Já no primeiro contato é apresentada uma estimativa realista, priorizando-se a solução extrajudicial sempre que viável.",'),
 ('q: "Como recebo notícias do andamento?",\n    a: "Você é avisado a cada movimentação relevante pelo canal que preferir. Não precisa ficar perguntando.",',
  'q: "Como o cliente é informado sobre o andamento do processo?",\n    a: "O cliente é comunicado a cada movimentação relevante, pelo canal de sua preferência, sem necessidade de solicitação.",'),
 ('q: "Meus dados e o que eu contar ficam em sigilo?",\n    a: "Sim. Tudo que você compartilha é protegido pelo sigilo profissional e tratado conforme a LGPD.",',
  'q: "As informações compartilhadas permanecem em sigilo?",\n    a: "Sim. Todas as informações compartilhadas são protegidas pelo sigilo profissional e tratadas em conformidade com a Lei Geral de Proteção de Dados (LGPD).",'),
 ('Antes de <em className="italic text-accent">chamar no WhatsApp.</em>',
  'Esclarecimentos antes do <em className="italic text-accent">primeiro contato.</em>'),
 ('mensagem="Olá! Tenho uma dúvida que não estava nas perguntas frequentes do site."\n            >\n              Minha dúvida não está aqui',
  'mensagem="Olá, tenho uma dúvida que não foi respondida nas perguntas frequentes do site."\n            >\n              Minha dúvida não foi respondida'),
])

edit('src/components/Contato.jsx', [
 ('Vamos conversar sobre o <em className="italic text-accent">seu caso.</em>',
  'Fale conosco sobre <em className="italic text-accent">o seu caso.</em>'),
 ('''            <p className="text-fg/70 leading-relaxed max-w-sm mt-6">
              A forma mais rápida é o WhatsApp: você explica a situação e a gente
              responde com os próximos passos. Também atendemos presencialmente e
              por videochamada.
            </p>''',
  '''            <p className="text-fg/70 leading-relaxed max-w-sm mt-6">
              O canal mais direto é o WhatsApp: descreva a sua situação e receba
              orientação sobre os próximos passos. O atendimento também é
              realizado presencialmente e por videochamada.
            </p>'''),
 ('mensagem="Olá! Vim pelo site da Gimenes e Pires e gostaria de falar sobre o meu caso."\n              >\n              Explicar meu caso',
  'mensagem="Olá, vim pelo site da Gimenes e Pires e gostaria de tratar sobre o meu caso."\n              >\n              Expor meu caso'),
])

edit('src/components/Footer.jsx', [
 ('''          Este site é informativo e não substitui a consulta a um advogado. O contato
          inicial não gera vínculo nem cobrança. Seus dados são tratados com sigilo,
          conforme a LGPD.''',
  '''          Este site tem caráter informativo e não substitui a consulta jurídica
          individualizada. O contato inicial não gera vínculo contratual nem ônus
          financeiro. Os dados fornecidos são tratados com sigilo, em conformidade
          com a Lei Geral de Proteção de Dados (LGPD).'''),
])

edit('src/components/Header.jsx', [
 ('{ href: "#atuacao", label: "Como ajudamos" },', '{ href: "#atuacao", label: "Atuação" },'),
 ('{ href: "#diferenciais", label: "Por que a G&P" },', '{ href: "#diferenciais", label: "Diferenciais" },'),
])

edit('index.html', [
 ('Gimenes e Pires — Sociedade de Advogados. Atendimento em todo o Brasil. Direito Civil, Empresarial e Contencioso.',
  'Gimenes e Pires — Sociedade de Advogados, com atuação em todo o território nacional em Direito Civil, Empresarial e Contencioso.'),
])

print("ok")
