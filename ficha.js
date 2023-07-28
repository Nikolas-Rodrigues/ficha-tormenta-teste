var forca = document.querySelector("#forca");
var destreza = document.querySelector("#destreza");
var constituicao = document.querySelector("#constituicao");
var inteligencia = document.querySelector("#inteligencia");
var sabedoria = document.querySelector("#sabedoria");
var carisma = document.querySelector("#carisma");
var botao = document.querySelector("#calc");
var racas = document.querySelector("#raca");
var classe = document.querySelector("#classe");
var niveli = document.querySelector("#nivel");
var danoo = document.querySelector("#vidano");
var mana_gastaa = document.querySelector("#managasto");
var armas1 = document.querySelector("#m1");
var armas2 = document.querySelector("#m2");
var armadura_equip = document.querySelector("#arm_equip");
var check1 = document.querySelector("#cx1");
var check2 = document.querySelector("#cx2");
var check3 = document.querySelector("#cx3");
var check4 = document.querySelector("#cx4");
var check5 = document.querySelector("#cx5");
var check6 = document.querySelector("#cx6");
var check7 = document.querySelector("#cx7");
var check8 = document.querySelector("#cx8");
var check9 = document.querySelector("#cx9");
var check10 = document.querySelector("#cx10");
var check11 = document.querySelector("#cx11");
var check12 = document.querySelector("#cx12");
var check13 = document.querySelector("#cx13");
var check14 = document.querySelector("#cx14");
var check15 = document.querySelector("#cx15");
var check16 = document.querySelector("#cx16");
var check17 = document.querySelector("#cx17");
var check18 = document.querySelector("#cx18");
var check19 = document.querySelector("#cx19");
var check20 = document.querySelector("#cx20");
var check21 = document.querySelector("#cx21");
var check22 = document.querySelector("#cx22");
var check23 = document.querySelector("#cx23");
var check24 = document.querySelector("#cx24");
var check25 = document.querySelector("#cx25");
var check26 = document.querySelector("#cx26");
var check27 = document.querySelector("#cx27");
var check28 = document.querySelector("#cx28");
var check29 = document.querySelector("#cx29");
var check30 = document.querySelector("#cx30");
var check31 = document.querySelector("#cx31");
var pcx1 = document.getElementById("1");
var pcx2 = document.getElementById("2");
var pcx3 = document.getElementById("3");
var pcx4 = document.getElementById("4");
var pcx5 = document.getElementById("5");
var pcx6 = document.getElementById("6");
var pcx7 = document.getElementById("7");
var pcx8 = document.getElementById("8");
var pcx9 = document.getElementById("9");
var pcx10 = document.getElementById("10");
var pcx11 = document.getElementById("11");
var pcx12 = document.getElementById("12");
var pcx13 = document.getElementById("13");
var pcx14 = document.getElementById("14");
var pcx15 = document.getElementById("15");
var pcx16 = document.getElementById("16");
var pcx17 = document.getElementById("17");
var pcx18 = document.getElementById("18");
var pcx19 = document.getElementById("19");
var pcx20 = document.getElementById("20");
var pcx21 = document.getElementById("21");
var pcx22 = document.getElementById("22");
var pcx23 = document.getElementById("23");
var pcx24 = document.getElementById("24");
var pcx25 = document.getElementById("25");
var pcx26 = document.getElementById("26");
var pcx27 = document.getElementById("27");
var pcx28 = document.getElementById("28");
var pcx29 = document.getElementById("29");
var pcx30 = document.getElementById("30");
var pcx31 = document.getElementById("31");
var pcx32 = document.getElementById("32");
var pcx33 = document.getElementById("33");
var pcx34 = document.getElementById("34");
var pcx35 = document.getElementById("35");
var pcx36 = document.getElementById("36");
var pcx37 = document.getElementById("37");
var pcx38 = document.getElementById("38");
var pcx39 = document.getElementById("39");
var pcx40 = document.getElementById("40");
var pcx41 = document.getElementById("41");
var pcx42 = document.getElementById("42");
var pcx43 = document.getElementById("43");
var pcx44 = document.getElementById("44");
var pcx45 = document.getElementById("45");
var pcx46 = document.getElementById("46");
var pcx47 = document.getElementById("47");
var pcx48 = document.getElementById("48");
var pcx49 = document.getElementById("49");
var pcx50 = document.getElementById("50");
var pcx51 = document.getElementById("51");
var pcx52 = document.getElementById("52");
var pcx53 = document.getElementById("53");
var pcx54 = document.getElementById("54");
var pcx55 = document.getElementById("55");
var pcx56 = document.getElementById("56");
var pcx57 = document.getElementById("57");
var pcx58 = document.getElementById("58");
var pcx59 = document.getElementById("59");
var pcx60 = document.getElementById("60");
var pcx61 = document.getElementById("61");
var pcx62 = document.getElementById("62");
var pcx63 = document.getElementById("63");
var pcx64 = document.getElementById("64");
var pcx65 = document.getElementById("65");
var pcx66 = document.getElementById("66");
var pcx67 = document.getElementById("67");
var pcx68 = document.getElementById("68");
var pcx69 = document.getElementById("69");
var pcx70 = document.getElementById("70");
var pcx71 = document.getElementById("71");

let menuItem = document.querySelectorAll(".itemMenu");
let botaoMenu = document.querySelector("#botao");
let menu = document.querySelector(".menu");

const saidaMfor = document.querySelector("#Mfor");
const saidaMdes = document.querySelector("#Mdes");
const saidaMcon = document.querySelector("#Mcon");
const saidaMint = document.querySelector("#Mint");
const saidaMsab = document.querySelector("#Msab");
const saidaMcar = document.querySelector("#Mcar");
const saidaArmor = document.querySelector("#armor");
const saidaacrobacia = document.querySelector("#acrobacia");
const saidaadestramento = document.querySelector("#adestramento");
const saidaatletismo = document.querySelector("#atletismo");
const saidaatuacao = document.querySelector("#atuacao");
const saidacavalgar = document.querySelector("#cavalgar");
const saidaconhecimento = document.querySelector("#conhecimento");
const saidacura = document.querySelector("#cura");
const saidadiplomacia = document.querySelector("#diplomacia");
const saidaenganacao = document.querySelector("#enganacao");
const saidafortitude = document.querySelector("#fortitude");
const saidafurtividade = document.querySelector("#furtividade");
const saidaguerra = document.querySelector("#guerra");
const saidainiciativa = document.querySelector("#iniciativa");
const saidaintimidacao = document.querySelector("#intimidacao");
const saidaintuicao = document.querySelector("#intuicao");
const saidainvestigacao = document.querySelector("#investigacao");
const saidajogatina = document.querySelector("#jogatina");
const saidaladinagem = document.querySelector("#ladinagem");
const saidaluta_for = document.querySelector("#luta_forca");
const saidaluta_des = document.querySelector("#luta_destreza");
const saidamisticismo = document.querySelector("#misticism0");
const saidanobreza = document.querySelector("#nobreza");
const saidaoficio = document.querySelector("#ofici0");
const saidapercepcao = document.querySelector("#percepcao");
const saidapilotagem = document.querySelector("#pilotagem");
const saidapontaria_tiro = document.querySelector("#pontaria_tiro");
const saidapontaria_arremesso = document.querySelector("#pontaria_arremesso");
const saidareflexo = document.querySelector("#reflexo");
const saidareligiao = document.querySelector("#religiao");
const saidasobrevivencia = document.querySelector("#sobrevivencia");
const saidavontade = document.querySelector("#vontade");
const saidanar1 = document.querySelector("#nome_arma1");
const saidaaar1 = document.querySelector("#acerto_arma1");
const saidadar1 = document.querySelector("#dano_arma1");
const saidacar1 = document.querySelector("#critico_arma1");
const saidamar1 = document.querySelector("#multiplicador_arma1");
const saidanar2 = document.querySelector("#nome_arma2");
const saidaaar2 = document.querySelector("#acerto_arma2");
const saidadar2 = document.querySelector("#dano_arma2");
const saidacar2 = document.querySelector("#critico_arma2");
const saidamar2 = document.querySelector("#multiplicador_arma2");
const saidahpm = document.querySelector("#vidamax");
const saidahp = document.querySelector("#vida");
const saidam = document.querySelector("#manamax");
const saidamm = document.querySelector("#mana");
const saidadesloc = document.querySelector("#desloc");
var skillraca = [];
var skillorigem = [];
var acrobacia = 0;
var adestramento = 0;
var atletismo = 0;
var atuacao = 0;
var cavalgar = 0;
var conhecimento = 0;
var cura = 0;
var diplomacia = 0;
var enganacao = 0;
var fortitude = 0;
var furtividade = 0;
var guerra = 0;
var iniciativa = 0;
var intimidacao = 0;
var intuicao = 0;
var investigacao = 0;
var jogatina = 0;
var ladinagem = 0;
var luta_for = 0;
var luta_des = 0;
var misticismo = 0;
var nobreza = 0;
var oficio = 0;
var percepcao = 0;
var pilotagem = 0;
var pontaria_tiroDestreza = 0;
var pontaria_arremesso = 0;
var reflexo = 0;
var religiao = 0;
var sobrevivenciaSabedoria = 0;
var vontade = 0;
var inventario = [];
var hp = 0;
var deslocamento = 9;
var treino = 0;
var penalidade = 0;
var mana = 0;
let agil = 0;

botao.addEventListener("click", (e) => {
  var modForca = forca.value;
  var modDestreza = destreza.value;
  var modConstituicao = constituicao.value;
  var modInteligencia = inteligencia.value;
  var modSabedoria = sabedoria.value;
  var modCarisma = carisma.value;
  var modForca = Math.floor((modForca - 10) / 2);
  var modDestreza = Math.floor((modDestreza - 10) / 2);
  var modConstituicao = Math.floor((modConstituicao - 10) / 2);
  var modInteligencia = Math.floor((modInteligencia - 10) / 2);
  var modSabedoria = Math.floor((modSabedoria - 10) / 2);
  var modCarisma = Math.floor((modCarisma - 10) / 2);
  var vida_base = 0;
  var vida_por_lvl = 0;
  hp = 0;
  var hp_max = 0;
  mana = 0;
  var mana_max = 0;
  var mana_por_lvl = 0;

  const armas = [
    {
      nome: "Adaga",
      dano: "1d4",
      critico: 19,
      multiplicador: 2,
      mao: "leve",
      alcance: "curto",
      agil: true,
    },
    {
      nome: "Ataque desarmado",
      dano: "1d3",
      critico: 20,
      multiplicador: 2,
      mao: "leve",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Espada curta",
      dano: "1d6",
      critico: 19,
      multiplicador: 2,
      mao: "leve",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Foice",
      dano: "1d6",
      critico: 20,
      multiplicador: 3,
      mao: "leve",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Manopla",
      dano: "1d3",
      critico: 20,
      multiplicador: 2,
      mao: "leve",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Clava",
      dano: "1d6",
      critico: 20,
      multiplicador: 2,
      mao: "1h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Lança",
      dano: "1d6",
      critico: 20,
      multiplicador: 2,
      mao: "1h",
      alcance: "curto",
      agil: null,
    },
    {
      nome: "Maça",
      dano: "1d8",
      critico: 20,
      multiplicador: 2,
      mao: "1h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Bordão",
      dano: "1d6",
      critico: 20,
      multiplicador: 2,
      mao: "2h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Pique",
      dano: "1d8",
      critico: 20,
      multiplicador: 2,
      mao: "2h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Tacape",
      dano: "1d10",
      critico: 20,
      multiplicador: 2,
      mao: "2h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Arco curto",
      dano: "1d6",
      critico: 20,
      multiplicador: 3,
      mao: "2h",
      alcance: "medio",
      agil: null,
    },
    {
      nome: "Besta leve",
      dano: "1d8",
      critico: 19,
      multiplicador: 2,
      mao: "2h",
      alcance: "medio",
      agil: null,
    },
    {
      nome: "Azagaia",
      dano: "1d6",
      critico: 20,
      multiplicador: 2,
      mao: "1h",
      alcance: "medio",
      agil: null,
    },
    {
      nome: "Funda",
      dano: "1d4",
      critico: 20,
      multiplicador: 2,
      mao: "2h",
      alcance: "medio",
      agil: null,
    },
    {
      nome: "Escudo leve",
      dano: "1d4",
      critico: 20,
      multiplicador: 2,
      mao: "leve",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Machadinha",
      dano: "1d6",
      critico: 20,
      multiplicador: 3,
      mao: "leve",
      alcance: "curto",
      agil: null,
    },
    {
      nome: "Cimitarra",
      dano: "1d6",
      critico: 18,
      multiplicador: 2,
      mao: "1h",
      alcance: "melle",
      agil: true,
    },
    {
      nome: "Escudo pesado",
      dano: "1d6",
      critico: 20,
      multiplicador: 2,
      mao: "1h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Espada longa",
      dano: "1d8",
      critico: 19,
      multiplicador: 2,
      mao: "1h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Florete",
      dano: "1d6",
      critico: 18,
      multiplicador: 2,
      mao: "1h",
      alcance: "melle",
      agil: true,
    },
    {
      nome: "Machado de batalha",
      dano: "1d8",
      critico: 20,
      multiplicador: 3,
      mao: "1h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Mangual",
      dano: "1d8",
      critico: 20,
      multiplicador: 2,
      mao: "1h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Martelo de guerra",
      dano: "1d8",
      critico: 20,
      multiplicador: 3,
      mao: "1h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Picareta",
      dano: "1d6",
      critico: 20,
      multiplicador: 4,
      mao: "1h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Tridente",
      dano: "1d8",
      critico: 20,
      multiplicador: 2,
      mao: "1h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Alabarda",
      dano: "1d10",
      critico: 20,
      multiplicador: 3,
      mao: "2h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Alfange",
      dano: "2d4",
      critico: 18,
      multiplicador: 2,
      mao: "2h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Gadanho",
      dano: "2d4",
      critico: 20,
      multiplicador: 4,
      mao: "2h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Lança Montada",
      dano: "1d12",
      critico: 20,
      multiplicador: 3,
      mao: "2h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Machado de guerra",
      dano: "2d6",
      critico: 19,
      multiplicador: 2,
      mao: "2h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Montante",
      dano: "2d6",
      critico: 19,
      multiplicador: 3,
      mao: "2h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Arco longo",
      dano: "1d8",
      critico: 20,
      multiplicador: 3,
      mao: "",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Besta pesada",
      dano: "1d12",
      critico: 19,
      multiplicador: 2,
      mao: "",
      alcance: "medio",
      agil: null,
    },
    {
      nome: "Chicote",
      dano: "1d3",
      critico: 20,
      multiplicador: 2,
      mao: "1h",
      alcance: "4,5m",
      agil: true,
    },
    {
      nome: "Espada bastarda",
      dano: "1d10/1d12",
      critico: 19,
      multiplicador: 2,
      mao: "1h e 2h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Katana",
      dano: "1d8/1d10",
      critico: 19,
      multiplicador: 2,
      mao: "1h e 2h",
      alcance: "melle",
      agil: true,
    },
    {
      nome: "Machado anão",
      dano: "1d10",
      critico: 20,
      multiplicador: 3,
      mao: "1h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Corrente de espinhos",
      dano: "2d4",
      critico: 19,
      multiplicador: 2,
      mao: "2h",
      alcance: "4,5m",
      agil: true,
    },
    {
      nome: "Machado táurico",
      dano: "2d8",
      critico: 20,
      multiplicador: 3,
      mao: "2h",
      alcance: "melle",
      agil: null,
    },
    {
      nome: "Mosquete",
      dano: "2d8",
      critico: 19,
      multiplicador: 3,
      mao: "2h",
      alcance: "medio",
      agil: null,
    },
    {
      nome: "Pistola",
      dano: "2d6",
      critico: 19,
      multiplicador: 3,
      mao: "1h",
      alcance: "curto",
      agil: null,
    },
  ];

  const armaduras = [
    { defesa: 0, penalidade: 0, pesada: false },
    { defesa: 1, penalidade: 0, pesada: false },
    { defesa: 2, penalidade: 0, pesada: false },
    { defesa: 3, penalidade: -1, pesada: false },
    { defesa: 4, penalidade: -3, pesada: false },
    { defesa: 5, penalidade: -4, pesada: false },
    { defesa: 5, penalidade: -2, pesada: true },
    { defesa: 6, penalidade: -2, pesada: true },
    { defesa: 7, penalidade: -3, pesada: true },
    { defesa: 8, penalidade: -4, pesada: true },
    { defesa: 10, penalidade: -5, pesada: true },
  ];

  var armadura_equipada = armadura_equip.value;
  var armadura = 10;
  var nivel = Number(niveli.value);
  var metade = Math.floor(nivel / 2);
  var clase = classe.value;
  var raca = racas.value;
  if (nivel >= 15) {
    treino = 6;
  } else if (nivel <= 6) {
    treino = 2;
  } else {
    treino = 4;
  }

  acrobacia = metade + modDestreza;
  adestramento = metade + modCarisma;
  atletismo = metade + modForca;
  atuacao = metade + modCarisma;
  cavalgar = metade + modDestreza;
  conhecimento = metade + modInteligencia;
  cura = metade + modSabedoria;
  diplomacia = metade + modCarisma;
  enganacao = metade + modCarisma;
  fortitude = metade + modConstituicao;
  furtividade = metade + modDestreza;
  guerra = metade + modInteligencia;
  iniciativa = metade + modDestreza;
  intimidacao = metade + modCarisma;
  intuicao = metade + modSabedoria;
  investigacao = metade + modInteligencia;
  jogatina = metade + modCarisma;
  ladinagem = metade + modDestreza;
  luta_for = metade + modForca;
  luta_des = metade + modDestreza;
  misticismo = metade + modInteligencia;
  nobreza = metade + modInteligencia;
  oficio = metade + modInteligencia;
  percepcao = metade + modSabedoria;
  pilotagem = metade + modDestreza;
  pontaria_tiro = metade + modDestreza;
  pontaria_arremesso = metade + modDestreza;
  reflexo = metade + modDestreza;
  religiao = metade + modSabedoria;
  sobrevivencia = metade + modSabedoria;
  vontade = metade + modSabedoria;

  switch (raca) {
    case "humano":
      skillraca = [];
      skillraca.push("Versátil");

      exibirSkills();
      break;
    case "anao":
      skillraca = [];
      skillraca.push(
        "Conhecimento das Rochas",
        "Devagar e Sempre",
        "Duro como Pedra",
        "Tradição de Heredrimm"
      );
      vida_base = vida_base + 3;
      vida_por_lvl = vida_por_lvl + 1;
      sobrevivencia = sobrevivencia + 2;
      percepcao = percepcao + 2;
      armas[21].dano = armas[21].dano + " + 2";
      armas[23].dano = armas[23].dano + " + 2";
      armas[24].dano = armas[24].dano + " + 2";
      armas[30].dano = armas[30].dano + " + 2";
      armas[36].dano = armas[36].dano + " + 2";
      armas[38].dano = armas[38].dano + " + 2";
      deslocamento = 6;
      exibirSkills();
      break;

    case "dahllan":
      skillraca = [];
      skillraca.push(
        "Amiga das Plantas",
        "Armadura de Allihanna",
        "Empatia Selvagem"
      );
      exibirSkills();
      break;

    case "elfo":
      skillraca = [];
      skillraca.push(
        "Graça de Glórienn",
        "Herança Feérica",
        "Sentidos Élficos"
      );
      mana_por_lvl = mana_por_lvl + 1;
      deslocamento = 12;
      misticismo = misticismo + 2;
      percepcao = percepcao + 2;
      exibirSkills();
      break;

    case "goblin":
      skillraca = [];
      skillraca.push(
        "Engenhoso",
        "Espelunqueiro",
        "Peste Esguia",
        "Rato das Ruas"
      );
      fortitude = fortitude + 2;
      exibirSkills();
      break;

    case "lefou":
      skillraca = [];
      skillraca.push("Cria da Tormenta", "Deformidade");
      exibirSkills();
      break;

    case "minotauro":
      skillraca = [];
      skillraca.push("Chifres", "Couro Rígido", "Faro", "Medo de Altura");
      armadura++;
      exibirSkills();
      break;
    case "qareen":
      skillraca = [];
      skillraca.push("Desejos", "Resistência Elemental", "Tatuagem Mística");
      exibirSkills();
      break;
    case "golem":
      skillraca = [];
      skillraca.push(
        "Canalizar Reparos",
        "Chassi",
        "Criatura Artificial",
        "Espírito Elemental",
        "Sem Origem."
      );
      armadura++;
      armadura++;
      penalidade = penalidade - 2;
      exibirSkills();
      break;

    case "hynne":
      skillraca = [];
      skillraca.push(
        "Arremessador",
        "Pequeno e Rechonchudo",
        "Sorte Salvadora"
      );
      exibirSkills();
      enganacao = enganacao + 2;
      atletismo = atletismo + metade + Math.max(modDestreza, modForca);
      deslocamento = 6;
      armas[14].dano = armas[14].dano + "+ 1 passo";
      break;

    case "kliren":
      skillraca = [];
      skillraca.push(
        "Híbrido",
        "Lógica Gnômica",
        "Ossos Frágeis",
        "Vanguardista"
      );
      exibirSkills();
      oficio = oficio + 2;
      break;
    case "medusa":
      skillraca = [];
      skillraca.push(
        "Cria de Megalokk",
        "Natureza Venenosa",
        "Olhar Atordoante"
      );
      exibirSkills();

      break;
    case "osteon":
      skillraca = [];
      skillraca.push(
        "Armadura Óssea",
        "Memória Póstuma",
        "Natureza Esquelética",
        "Preço da Não Vida"
      );
      exibirSkills();

      break;

    case "sereia":
      skillraca = [];
      skillraca.push(
        "Canção dos Mares",
        "Mestre do Tridente",
        "Transformação Anfíbia"
      );
      exibirSkills();
      armas[13].dano = armas[13].dano + " + 2 ";
      armas[6].dano = armas[6].dano + " + 2 ";
      armas[25].dano = armas[25].dano + " + 2 ";
      break;

    case "silfide":
      skillraca = [];
      skillraca.push(
        "Asas de Borboleta",
        "Espírito da Natureza",
        "Magia das Fadas"
      );
      exibirSkills();

      break;

    case "aggelus":
      skillraca = [];
      skillraca.push("Herança Divina", "Luz Sagrada");
      exibirSkills();
      intuicao = intuicao + 2;
      diplomacia = diplomacia + 2;
      break;

    case "sulfure":
      skillraca = [];
      skillraca.push("Herança Divina", "Sombras Profanas");
      exibirSkills();
      enganacao = enganacao + 2;
      furtividade = furtividade + 2;
      break;

    case "trog":
      skillraca = [];
      skillraca.push("Mau Cheiro", "Mordida", "Reptiliano", "Sangue Frio");
      exibirSkills();
      armadura++;
      if (armadura_equipada == 0) {
        furtividade = furtividade + 5;
      } else {
      }
      break;
  }

  switch (clase) {
    case "bruxo":
      vida_base = vida_base + 8 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 2 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 6;
      mana = modInteligencia;
      break;
    case "feiticeiro":
      vida_base = vida_base + 8 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 2 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 6;
      mana = modCarisma;
      break;

    case "mago":
      vida_base = vida_base + 8 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 2 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 6;
      mana = modInteligencia;
      break;

    case "barbaro":
      vida_base = vida_base + 24 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 6 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 3;
      break;

    case "bardo":
      vida_base = vida_base + 12 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 3 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 4;
      mana = mana + modCarisma;
      break;

    case "bucaneiro":
      vida_base = vida_base + 16 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 4 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 3;
      armadura = armadura + Math.min(nivel, modCarisma);
      break;

    case "cacador":
      vida_base = vida_base + 16 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 4 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 4;
      break;

    case "cavaleiro":
      vida_base = vida_base + 20 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 5 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 3;
      break;

    case "clerigo":
      vida_base = vida_base + 16 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 4 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 5;
      break;

    case "druida":
      vida_base = vida_base + 16 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 4 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 4;
      break;

    case "guerreiro":
      vida_base = vida_base + 20 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 5 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 3;
      break;

    case "inventor":
      vida_base = vida_base + 12 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 3 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 4;
      break;

    case "ladino":
      vida_base = vida_base + 12 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 3 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 4;
      break;

    case "lutador":
      vida_base = vida_base + 20 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 5 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 3;
      break;

    case "nobre":
      vida_base = vida_base + 16 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 4 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 4;
      break;

    case "paladino":
      vida_base = vida_base + 20 + modConstituicao;
      vida_por_lvl = vida_por_lvl + 5 + modConstituicao;
      mana_por_lvl = mana_por_lvl + 3;
      break;
  }

  var m1 = Number(armas1.value);
  var m2 = Number(armas2.value);

  if (armaduras[armadura_equipada].pesada == true) {
    armadura = armadura + armaduras[armadura_equipada].defesa;
  } else {
    armadura = armadura + armaduras[armadura_equipada].defesa + modDestreza;
  }

  if (m1 == 15) {
    armadura = armadura + 1;
    penalidade = penalidade - 1;
  }

  if (m2 == 15) {
    armadura = armadura + 1;
    penalidade = penalidade - 1;
  }

  if (m1 == 18) {
    armadura = armadura + 2;
    penalidade = penalidade - 2;
  }

  if (m2 == 18) {
    armadura = armadura + 2;
    penalidade = penalidade - 2;
  }

  hp_max = vida_base + (nivel - 1) * vida_por_lvl;
  hp = hp_max;

  mana_max = mana + mana_por_lvl * nivel;
  mana = mana_max;

  if (armas[m1].agil == true) {
    armas[m1].dano = armas[m1].dano + `+ ${Math.max(modDestreza, modForca)} `;
  } else {
    armas[m1].dano = armas[m1].dano + `+ ${modForca} `;
  }
  if (armas[m2].agil == true) {
    armas[m2].dano = armas[m2].dano + `+ ${Math.max(modDestreza, modForca)}`;
  } else {
    armas[m2].dano = armas[m2].dano + `+ ${modForca} `;
  }

  var acerto1 = 0;
  if (armas[m1].agil == true) {
    acerto1 = Math.max(luta_des, luta_for);
  } else {
    acerto1 = luta_for;
  }

  var acerto2 = 0;
  if (armas[m2].agil == true) {
    acerto2 = Math.max(luta_des, luta_for);
  } else {
    acerto2 = luta_for;
  }

  saidaMfor.innerHTML = modForca;
  saidaMdes.innerHTML = modDestreza;
  saidaMcon.innerHTML = modConstituicao;
  saidaMint.innerHTML = modInteligencia;
  saidaMsab.innerHTML = modSabedoria;
  saidaMcar.innerHTML = modCarisma;
  saidaArmor.innerHTML = armadura;
  saidahpm.innerHTML = hp_max;
  saidahp.innerHTML = hp;
  saidam.innerHTML = mana;
  saidamm.innerHTML = mana_max;
  saidadesloc.innerHTML = deslocamento;
  saidaacrobacia.innerHTML = acrobacia;
  saidaadestramento.innerHTML = adestramento;
  saidaatletismo.innerHTML = atletismo;
  saidaatuacao.innerHTML = atuacao;
  saidacavalgar.innerHTML = cavalgar;
  saidaconhecimento.innerHTML = conhecimento;
  saidacura.innerHTML = cura;
  saidadiplomacia.innerHTML = diplomacia;
  saidaenganacao.innerHTML = enganacao;
  saidafortitude.innerHTML = fortitude;
  saidafurtividade.innerHTML = furtividade;
  saidaguerra.innerHTML = guerra;
  saidainiciativa.innerHTML = iniciativa;
  saidaintimidacao.innerHTML = intimidacao;
  saidaintuicao.innerHTML = intuicao;
  saidainvestigacao.innerHTML = investigacao;
  saidajogatina.innerHTML = jogatina;
  saidaladinagem.innerHTML = ladinagem;
  saidaluta_for.innerHTML = luta_for;
  saidaluta_des.innerHTML = luta_des;
  saidamisticismo.innerHTML = misticismo;
  saidanobreza.innerHTML = nobreza;
  saidaoficio.innerHTML = oficio;
  saidapercepcao.innerHTML = percepcao;
  saidapilotagem.innerHTML = pilotagem;
  saidapontaria_tiro.innerHTML = pontaria_tiro;
  saidapontaria_arremesso.innerHTML = pontaria_arremesso;
  saidareflexo.innerHTML = reflexo;
  saidareligiao.innerHTML = religiao;
  saidasobrevivencia.innerHTML = sobrevivencia;
  saidavontade.innerHTML = vontade;

  saidanar1.innerHTML = armas[m1].nome;

  acerto11 = acerto1;
  saidaaar1.innerHTML = acerto1;

  dano1 = armas[m1].dano;
  saidadar1.innerHTML = armas[m1].dano;

  critico1 = armas[m1].critico;
  saidacar1.innerHTML = armas[m1].critico;

  multiplicador1 = armas[m1].multiplicador;
  saidamar1.innerHTML = armas[m1].multiplicador;

  saidanar2.innerHTML = armas[m2].nome;

  acerto22 = acerto2;
  saidaaar2.innerHTML = acerto2;

  dano2 = armas[m2].dano;
  saidadar2.innerHTML = armas[m2].dano;

  critico2 = armas[m2].critico;
  saidacar2.innerHTML = armas[m2].critico;

  multiplicador2 = armas[m2].multiplicador;
  saidamar2.innerHTML = armas[m2].multiplicador;
});

function tomar_dano() {
  let danoTomado = danoo.value;
  hp = hp - danoTomado;
  saidahp.innerHTML = hp;
}

function manaGasta() {
  let manaTotalGasta = mana_gastaa.value;
  mana = mana - manaTotalGasta;
  saidamm.innerHTML = mana;
}

function p1() {
  if (check1.checked) {
    acrobacia = acrobacia + treino;
    saidaacrobacia.innerHTML = acrobacia;
  } else {
    acrobacia = acrobacia - treino;
    saidaacrobacia.innerHTML = acrobacia;
  }
}

function p2() {
  if (check2.checked) {
    adestramento = adestramento + treino;
    saidaadestramento.innerHTML = adestramento;
  } else {
    adestramento = adestramento - treino;
    saidaadestramento.innerHTML = adestramento;
  }
}

function p3() {
  if (check3.checked) {
    atletismo = atletismo + treino;
    saidaatletismo.innerHTML = atletismo;
  } else {
    atletismo = atletismo - treino;
    saidaatletismo.innerHTML = atletismo;
  }
}

function p4() {
  if (check4.checked) {
    atuacao = atuacao + treino;
    saidaatuacao.innerHTML = atuacao;
  } else {
    atuacao = atuacao - treino;
    saidaatuacao.innerHTML = atuacao;
  }
}

function p5() {
  if (check5.checked) {
    cavalgar = cavalgar + treino;
    saidacavalgar.innerHTML = cavalgar;
  } else {
    cavalgar = cavalgar - treino;
    saidacavalgar.innerHTML = cavalgar;
  }
}

function p6() {
  if (check6.checked) {
    conhecimento = conhecimento + treino;
    saidaconhecimento.innerHTML = conhecimento;
  } else {
    conhecimento = conhecimento - treino;
    saidaconhecimento.innerHTML = conhecimento;
  }
}

function p7() {
  if (check7.checked) {
    cura = cura + treino;
    saidacura.innerHTML = cura;
  } else {
    cura = cura - treino;
    saidacura.innerHTML = cura;
  }
}

function p8() {
  if (check8.checked) {
    diplomacia = diplomacia + treino;
    saidadiplomacia.innerHTML = diplomacia;
  } else {
    diplomacia = diplomacia - treino;
    saidadiplomacia.innerHTML = diplomacia;
  }
}

function p9() {
  if (check9.checked) {
    enganacao = enganacao + treino;
    saidaenganacao.innerHTML = enganacao;
  } else {
    enganacao = enganacao - treino;
    saidaenganacao.innerHTML = enganacao;
  }
}

function p10() {
  if (check10.checked) {
    fortitude = fortitude + treino;
    saidafortitude.innerHTML = fortitude;
  } else {
    fortitude = fortitude - treino;
    saidafortitude.innerHTML = fortitude;
  }
}

function p11() {
  if (check11.checked)  {
    furtividade = furtividade + treino;
    saidafurtividade.innerHTML = furtividade;
  } else {
    furtividade = furtividade - treino;
    saidafurtividade.innerHTML = furtividade;
  }
}

function p12() {
  if (check12.checked) {
    guerra = guerra + treino;
    saidaguerra.innerHTML = guerra;
  } else {
    guerra = guerra - treino;
    saidaguerra.innerHTML = guerra;
  }
}

function p13() {
  if (check13.checked) {
    iniciativa = iniciativa + treino;
    saidainiciativa.innerHTML = iniciativa;
  } else {
    iniciativa = iniciativa - treino;
    saidainiciativa.innerHTML = iniciativa;
  }
}

function p14() {
  if (check14.checked) {
    intimidacao = intimidacao + treino;
    saidaintimidacao.innerHTML = intimidacao;
  } else {
    intimidacao = intimidacao - treino;
    saidaintimidacao.innerHTML = intimidacao;
  }
}

function p15() {
  if (check15.checked) {
    intuicao = intuicao + treino;
    saidaintuicao.innerHTML = intuicao;
  } else {
    intuicao = intuicao - treino;
    saidaintuicao.innerHTML = intuicao;
  }
}

function p16() {
  if (check16.checked) {
    investigacao = investigacao + treino;
    saidainvestigacao.innerHTML = investigacao;
  } else {
    investigacao = investigacao - treino;
    saidainvestigacao.innerHTML = investigacao;
  }
}

function p17() {
  if (check17.checked) {
    jogatina = jogatina + treino;
    saidajogatina.innerHTML = jogatina;
  } else {
    jogatina = jogatina - treino;
    saidajogatina.innerHTML = jogatina;
  }
}

function p18() {
  if (check18.checked) {
    ladinagem = ladinagem + treino;
    saidaladinagem.innerHTML = ladinagem;
  } else {
    ladinagem = ladinagem - treino;
    saidaladinagem.innerHTML = ladinagem;
  }
}

function p19() {
  if (check19.checked) {
    luta_for = luta_for + treino;
    saidaluta_for.innerHTML = luta_for;
  } else {
    luta_for = luta_for - treino;
    saidaluta_for.innerHTML = luta_for;
  }
}

function p20() {
  if (check20.checked) {
    luta_des = luta_des + treino;
    saidaluta_des.innerHTML = luta_des;
  } else {
    luta_des = luta_des - treino;
    saidaluta_des.innerHTML = luta_des;
  }
}

function p21() {
  if (check21.checked) {
    misticismo = misticismo + treino;
    saidamisticismo.innerHTML = misticismo;
  } else {
    misticismo = misticismo - treino;
    saidamisticismo.innerHTML = misticismo;
  }
}

function p22() {
  if (check22.checked) {
    nobreza = nobreza + treino;
    saidanobreza.innerHTML = nobreza;
  } else {
    nobreza = nobreza - treino;
    saidanobreza.innerHTML = nobreza;
  }
}

function p23() {
  if (check23.checked) {
    oficio = oficio + treino;
    saidaoficio.innerHTML = oficio;
  } else {
    oficio = oficio - treino;
    saidaoficio.innerHTML = oficio;
  }
}

function p24() {
  if (check24.checked) {
    percepcao = percepcao + treino;
    saidapercepcao.innerHTML = percepcao;
  } else {
    percepcao = percepcao - treino;
    saidapercepcao.innerHTML = percepcao;
  }
}

function p25() {
  if (check25.checked) {
    pilotagem = pilotagem + treino;
    saidapilotagem.innerHTML = pilotagem;
  } else {
    pilotagem = pilotagem - treino;
    saidapilotagem.innerHTML = pilotagem;
  }
}

function p26() {
  if (check26.checked) {
    pontaria_tiro = pontaria_tiro + treino;
    saidapontaria_tiro.innerHTML = pontaria_tiro;
  } else {
    pontaria_tiro = pontaria_tiro - treino;
    saidapontaria_tiro.innerHTML = pontaria_tiro;
  }
}

function p27() {
  if (check27.checked) {
    pontaria_arremesso = pontaria_arremesso + treino;
    saidapontaria_arremesso.innerHTML = pontaria_arremesso;
  } else {
    pontaria_arremesso = pontaria_arremesso - treino;
    saidapontaria_arremesso.innerHTML = pontaria_arremesso;
  }
}

function p28() {
  if (check28.checked) {
    reflexo = reflexo + treino;
    saidareflexo.innerHTML = reflexo;
  } else {
    reflexo = reflexo - treino;
    saidareflexo.innerHTML = reflexo;
  }
}

function p29() {
  if (check29.checked) {
    religiao = religiao + treino;
    saidareligiao.innerHTML = religiao;
  } else {
    religiao = religiao - treino;
    saidareligiao.innerHTML = religiao;
  }
}

function p30() {
  if (check30.checked) {
    sobrevivencia = sobrevivencia + treino;
    saidasobrevivencia.innerHTML = sobrevivencia;
  } else {
    sobrevivencia = sobrevivencia - treino;
    saidasobrevivencia.innerHTML = sobrevivencia;
  }
}

function p31() {
  if (check31.checked) {
    vontade = vontade + treino;
    saidavontade.innerHTML = vontade;
  } else {
    vontade = vontade - treino;
    saidavontade.innerHTML = vontade;
  }
}

function selectLink() {
  menuItem.forEach((item) => item.classList.remove("ativo"));
  this.classList.add("ativo");
}

menuItem.forEach((item) => item.addEventListener("click", selectLink));
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("expandir");
});

var container = document.getElementById("array-container");

function removerItem() {
  var rem = document.getElementById("remov_item");
  var itemRemover = rem.value;

  var index = inventario.indexOf(itemRemover);
  if (index !== -1) {
    inventario.splice(index, 1);
    exibirArray();
  }
}

function exibirArray() {
  container.innerHTML = "";

  for (var i = 0; i < inventario.length; i++) {
    var paragrafo = document.createElement("p");
    paragrafo.textContent = inventario[i];
    container.appendChild(paragrafo);
  }
}

function additem() {
  container.innerHTML = "";
  var item = document.getElementById("add_item");

  var adicionado = item.value;
  if (adicionado != "") {
    inventario.push(adicionado);
    console.log(inventario);

    for (var i = 0; i < inventario.length; i++) {
      var paragrafo = document.createElement("p");
      paragrafo.textContent = inventario[i];
      container.appendChild(paragrafo);
    }
  } else {
    console.log("nulo");
  }
}

//modais

function modal_pericia() {
  let modal = document.getElementById("modal_pericia");
  modal.style.display = "block";

  modal.addEventListener("click", (e) => {
    if (e.target.id == "modal_pericia" || e.target.id == "closePericia") {
      modal.style.display = "none";
    }
  });
}

function modal_equips() {
  let modal = document.getElementById("modal_equips");
  modal.style.display = "block";

  modal.addEventListener("click", (e) => {
    if (e.target.id == "modal_equips" || e.target.id == "closeEquipamentos") {
      modal.style.display = "none";
    }
  });
}

function modal_skills() {
  let modal = document.getElementById("modal_skills");
  modal.style.display = "block";

  modal.addEventListener("click", (e) => {
    if (e.target.id == "modal_skills" || e.target.id == "closeskills") {
      modal.style.display = "none";
    }
  });
}

function modal_habilidades() {
  let modal = document.getElementById("modal_habilidades");
  modal.style.display = "block";

  modal.addEventListener("click", (e) => {
    if (
      e.target.id == "modal_habilidades" ||
      e.target.id == "closehabilidades"
    ) {
      modal.style.display = "none";
    }
  });
}

var skills = [];

function exibirSkills() {
  var saidaskillsGeral = document.getElementById("saidaskillsGeral");
  skills.sort();
  saidaskillsGeral.innerHTML = skills.join("<br>");

  var saidaskillsRaca = document.getElementById("saidaskillsRaca");
  skillraca.sort();
  saidaskillsRaca.innerHTML = skillraca.join("<br>");

  var saidaskillsOrigem = document.getElementById("saidaskillsOrigem");
  skillorigem.sort();
  saidaskillsOrigem.innerHTML = skillorigem.join("<br>");
}

function b1() {
  if (pcx1.checked) {
    skills.push("Acuidade com Arma");
  } else {
    var skillRemover = "Acuidade com Arma";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b2() {
  if (pcx2.checked) {
    skills.push("Arma Secundária Grande");
  } else {
    var skillRemover = "Arma Secundária Grande";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b3() {
  if (pcx3.checked) {
    skills.push("Arremesso Potente");
  } else {
    var skillRemover = "Arremesso Potente";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b4() {
  if (pcx4.checked) {
    skills.push("Ataque Pesado");
  } else {
    var skillRemover = "Ataque Pesado";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b5() {
  if (pcx5.checked) {
    skills.push("Ataque Poderoso");
    dano1 = dano1 + "+ 5";
    saidadar1.innerHTML = dano1;
    acerto11 = acerto11 - 2;
    saidaaar1.innerHTML = acerto11;

    dano2 = dano2 + "+ 5";
    saidadar2.innerHTML = dano2;
    acerto22 = acerto22 - 2;
    saidaaar2.innerHTML = acerto22;
  } else {
    var skillRemover = "Ataque Poderoso";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b6() {
  if (pcx6.checked) {
    skills.push("Ataque Preciso");

    critico1 = critico1 - 2;
    multiplicador1 = multiplicador1 + 1;
    saidacar1.innerHTML = critico1;
    saidamar1.innerHTML = multiplicador1;

    critico2 = critico2 - 2;
    multiplicador2 = multiplicador2 + 1;
    saidacar2.innerHTML = critico2;
    saidamar2.innerHTML = multiplicador2;
  } else {
    var skillRemover = "Ataque Preciso";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
    critico1 = critico1 + 2;
    multiplicador1 = multiplicador1 - 1;
    saidacar1.innerHTML = critico1;
    saidamar1.innerHTML = multiplicador1;

    critico2 = critico2 + 2;
    multiplicador2 = multiplicador2 - 1;
    saidacar2.innerHTML = critico2;
    saidamar2.innerHTML = multiplicador2;
  }
  exibirSkills();
}

function b7() {
  if (pcx7.checked) {
    skills.push("Bloqueio com Escudo");
  } else {
    var skillRemover = "Bloqueio com Escudo";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b8() {
  if (pcx8.checked) {
    skills.push("Carga de Cavalaria");
  } else {
    var skillRemover = "Carga de Cavalaria";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b9() {
  if (pcx9.checked) {
    skills.push("Combate Defensivo");
  } else {
    var skillRemover = "Combate Defensivo";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b10() {
  if (pcx10.checked) {
    skills.push("Derrubar Aprimorado");
  } else {
    var skillRemover = "Derrubar Aprimorado";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b11() {
  if (pcx11.checked) {
    skills.push("Desarmar Aprimorado");
  } else {
    var skillRemover = "Desarmar Aprimorado";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b12() {
  if (pcx12.checked) {
    skills.push("Disparo Preciso");
  } else {
    var skillRemover = "Disparo Preciso";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b13() {
  if (pcx13.checked) {
    skills.push("Disparo Rápido");
  } else {
    var skillRemover = "Disparo Rápido";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b14() {
  if (pcx14.checked) {
    skills.push("Empunhadura Poderosa");
  } else {
    var skillRemover = "Empunhadura Poderosa";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b15() {
  if (pcx15.checked) {
    skills.push("Encouraçado");
  } else {
    var skillRemover = "Encouraçado";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b16() {
  if (pcx16.checked) {
    skills.push("Esquiva");
  } else {
    var skillRemover = "Esquiva";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b17() {
  if (pcx17.checked) {
    skills.push("Estilo de Arma e Escudo");
  } else {
    var skillRemover = "Estilo de Arma e Escudo";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b18() {
  if (pcx18.checked) {
    skills.push("Estilo de Arremesso");
  } else {
    var skillRemover = "Estilo de Arremesso";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b19() {
  if (pcx19.checked) {
    skills.push("Estilo de Disparo");
  } else {
    var skillRemover = "Estilo de Disparo";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b20() {
  if (pcx20.checked) {
    skills.push("Estilo de Duas Armas");
  } else {
    var skillRemover = "Estilo de Duas Armas";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b21() {
  if (pcx21.checked) {
    skills.push("Estilo de Duas Mãos");
  } else {
    var skillRemover = "Estilo de Duas Mãos";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b22() {
  if (pcx22.checked) {
    skills.push("Estilo de Uma Arma");
  } else {
    var skillRemover = "Estilo de Uma Arma";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b23() {
  if (pcx23.checked) {
    skills.push("Estilo Desarmado");
  } else {
    var skillRemover = "Estilo Desarmado";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}
function b24() {
  if (pcx24.checked) {
    skills.push("Fanático");
  } else {
    var skillRemover = "Fanático";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b25() {
  if (pcx25.checked) {
    skills.push("Finta Aprimorada");
  } else {
    var skillRemover = "Finta Aprimorada";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b26() {
  if (pcx26.checked) {
    skills.push("Foco em Arma");
  } else {
    var skillRemover = "Foco em Arma";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b27() {
  if (pcx27.checked) {
    skills.push("Ginete");
  } else {
    var skillRemover = "Ginete";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b28() {
  if (pcx28.checked) {
    skills.push("Inexpugnável");
  } else {
    var skillRemover = "Inexpugnável";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b29() {
  if (pcx29.checked) {
    skills.push("Mira Apurada");
  } else {
    var skillRemover = "Mira Apurada";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b30() {
  if (pcx30.checked) {
    skills.push("Presença Aterradora");
  } else {
    var skillRemover = "Presença Aterradora";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b31() {
  if (pcx31.checked) {
    skills.push("Proficiência");
  } else {
    var skillRemover = "Proficiência";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b32() {
  if (pcx32.checked) {
    skills.push("Quebrar Aprimorado");
  } else {
    var skillRemover = "Quebrar Aprimorado";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b33() {
  if (pcx33.checked) {
    skills.push("Reflexos de Combate");
  } else {
    var skillRemover = "Reflexos de Combate";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b34() {
  if (pcx34.checked) {
    skills.push("Saque Rápido");
  } else {
    var skillRemover = "Saque Rápido";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b35() {
  if (pcx35.checked) {
    skills.push("Trespassar");
  } else {
    var skillRemover = "Trespassar";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b36() {
  if (pcx36.checked) {
    skills.push("Vitalidade");
  } else {
    var skillRemover = "Vitalidade";
    var index = skills.indexOf(skillRemover);
    if (index !== -1) {
      skills.splice(index, 1);
    }
  }
  exibirSkills();
}

function b37() {
  if (pcx37.checked) {
    skillorigem.push("Membro da Igreja");
  } else {
    var skillRemover = "Membro da Igreja";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b38() {
  if (pcx38.checked) {
    skillorigem.push("Amigo Especial");
  } else {
    var skillRemover = "Amigo Especial";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b39() {
  if (pcx39.checked) {
    skillorigem.push("Lembranças Graduais");
  } else {
    var skillRemover = "Lembranças Graduais";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b40() {
  if (pcx40.checked) {
    skillorigem.push("Sangue Azul");
  } else {
    var skillRemover = "Sangue Azul";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b41() {
  if (pcx41.checked) {
    skillorigem.push("Frutos do Trabalho");
  } else {
    var skillRemover = "Frutos do Trabalho";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b42() {
  if (pcx42.checked) {
    skillorigem.push("Dom artístico");
  } else {
    var skillRemover = "Dom artístico";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b43() {
  if (pcx43.checked) {
    skillorigem.push("Esse Cheiro...");
  } else {
    var skillRemover = "Esse Cheiro...";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b44() {
  if (pcx44.checked) {
    skillorigem.push("À Prova de Tudo");
  } else {
    var skillRemover = "À Prova de Tudo";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b45() {
  if (pcx45.checked) {
    skillorigem.push("Confissão");
  } else {
    var skillRemover = "Confissão";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b46() {
  if (pcx46.checked) {
    skillorigem.push("Alpinista Social");
  } else {
    var skillRemover = "Alpinista Social";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b47() {
  if (pcx47.checked) {
    skillorigem.push("Truque de Mágica");
  } else {
    var skillRemover = "Truque de Mágica";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b48() {
  if (pcx48.checked) {
    skillorigem.push("Punguista");
  } else {
    var skillRemover = "Punguista";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b49() {
  if (pcx49.checked) {
    skillorigem.push("Médico de Campo");
  } else {
    var skillRemover = "Médico de Campo";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b50() {
  if (pcx50.checked) {
    skillorigem.push("Busca Interior");
  } else {
    var skillRemover = "Busca Interior";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b51() {
  if (pcx51.checked) {
    skillorigem.push("Desejo de Liberdade");
  } else {
    var skillRemover = "Desejo de Liberdade";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b52() {
  if (pcx52.checked) {
    skillorigem.push("Palpite Fundamentade");
  } else {
    var skillRemover = "Palpite Fundamentade";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}

function b53() {
  if (pcx53.checked) {
    skillorigem.push("Água no Feijão");
  } else {
    var skillRemover = "Água no Feijão";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b54() {
  if (pcx54.checked) {
    skillorigem.push("Cultura Exótica");
  } else {
    var skillRemover = "Cultura Exótica";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b55() {
  if (pcx55.checked) {
    skillorigem.push("Pão e Circo");
  } else {
    var skillRemover = "Pão e Circo";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b56() {
  if (pcx56.checked) {
    skillorigem.push("Detetive");
  } else {
    var skillRemover = "Detetive";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b57() {
  if (pcx57.checked) {
    skillorigem.push("Herança");
  } else {
    var skillRemover = "Herança";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b58() {
  if (pcx58.checked) {
    skillorigem.push("Amigo dos Plebeus");
  } else {
    var skillRemover = "Amigo dos Plebeus";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b60() {
  if (pcx60.checked) {
    skillorigem.push("Vendedor de Carcaças");
  } else {
    var skillRemover = "Vendedor de Carcaças";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b61() {
  if (pcx61.checked) {
    skillorigem.push("Rede de Contatos");
  } else {
    var skillRemover = "Rede de Contatos";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b62() {
  if (pcx62.checked) {
    skillorigem.push("Negociação");
  } else {
    var skillRemover = "Negociação";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b63() {
  if (pcx63.checked) {
    skillorigem.push("Escavador");
  } else {
    var skillRemover = "Escavador";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b64() {
  if (pcx64.checked) {
    skillorigem.push("Mochileiro");
  } else {
    var skillRemover = "Mochileiro";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b65() {
  if (pcx65.checked) {
    skillorigem.push("Quebra-galho");
  } else {
    var skillRemover = "Quebra-galho";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b66() {
  if (pcx66.checked) {
    skillorigem.push("Estoico");
  } else {
    var skillRemover = "Estoico";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b67() {
  if (pcx67.checked) {
    skillorigem.push("Antigo Mestre");
  } else {
    var skillRemover = "Antigo Mestre";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b68() {
  if (pcx68.checked) {
    skillorigem.push("Vida Rústica");
  } else {
    var skillRemover = "Vida Rústica";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b69() {
  if (pcx69.checked) {
    skillorigem.push("Influência Militar");
  } else {
    var skillRemover = "Influência Militar";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b70() {
  if (pcx70.checked) {
    skillorigem.push("Gororoba");
  } else {
    var skillRemover = "Gororoba";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}
function b71() {
  if (pcx71.checked) {
    skillorigem.push("Esforçado");
  } else {
    var skillRemover = "Esforçado";
    var index = skillorigem.indexOf(skillRemover);
    if (index !== -1) {
      skillorigem.splice(index, 1);
    }
  }
  exibirSkills();
}

function mostrarGeral() {
  let batata = document.querySelector(".toto");
  let potato = document.querySelector(".toto2");
  let Kartoffel = document.querySelector(".toto3");
  let tatws = document.querySelector(".toto4");
  let annuum = document.querySelector(".toto5");

  Kartoffel.style.display = "none";
  tatws.style.display = "none";
  annuum.style.display = "none";
  potato.style.display = "none";
  batata.style.display = "grid";
  batata.style.gridTemplateColumns = "50% 50%";
}

function mostrarOrigem() {
  let batata = document.querySelector(".toto");
  let potato = document.querySelector(".toto2");
  let Kartoffel = document.querySelector(".toto3");
  let tatws = document.querySelector(".toto4");
  let annuum = document.querySelector(".toto5");

  Kartoffel.style.display = "none";
  tatws.style.display = "none";
  annuum.style.display = "none";
  potato.style.display = "grid";
  potato.style.gridTemplateColumns = "50% 50%";
  batata.style.display = "none";
}

function mostrarClasse() {
  let batata = document.querySelector(".toto");
  let potato = document.querySelector(".toto2");
  let Kartoffel = document.querySelector(".toto3");
  let tatws = document.querySelector(".toto4");
  let annuum = document.querySelector(".toto5");

  potato.style.display = "none";
  tatws.style.display = "none";
  annuum.style.display = "none";
  Kartoffel.style.display = "grid";
  Kartoffel.style.gridTemplateColumns = "50% 50%";
  batata.style.display = "none";
}

function mostrarDeuses() {
  let batata = document.querySelector(".toto");
  let potato = document.querySelector(".toto2");
  let Kartoffel = document.querySelector(".toto3");
  let tatws = document.querySelector(".toto4");
  let annuum = document.querySelector(".toto5");

  Kartoffel.style.display = "none";
  potato.style.display = "none";
  annuum.style.display = "none";
  tatws.style.display = "grid";
  tatws.style.gridTemplateColumns = "50% 50%";
  batata.style.display = "none";
}

function mostrarTormenta() {
  let batata = document.querySelector(".toto");
  let potato = document.querySelector(".toto2");
  let Kartoffel = document.querySelector(".toto3");
  let tatws = document.querySelector(".toto4");
  let annuum = document.querySelector(".toto5");

  Kartoffel.style.display = "none";
  tatws.style.display = "none";
  potato.style.display = "none";
  annuum.style.display = "grid";
  annuum.style.gridTemplateColumns = "50% 50%";
  batata.style.display = "none";
}

const arrayPoderes = [
  {
    nome: "Acuidade com Arma",
    categoria:
      "Quando usa uma arma leve de corpo a corpo ou uma arma de arremesso, você pode usar seu modificador de Destreza em vez de Força nos testes de ataque e rolagens de dano. Pré-requisito: Des 13.",
  },
  {
    nome: "Arma Secundária grande",
    categoria:
      "Você pode usar duas armas de uma mão com o poder Estilo de Duas Armas. Pré-requisito: Estilo de Duas Armas",
  },
  {
    nome: "Arremesso Potente",
    categoria:
      "Quando usa uma arma de arremesso, você pode usar seu modificador de Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso.Pré-requisitos: For 13, Estilo de Arremesso.",
  },
  {
    nome: "Ataque Pesado",
    categoria:
      "Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, além do dano você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra). Pré-requisito: Estilo de Duas Mãos",
  },
  {
    nome: "Ataque Poderoso",
    categoria:
      "Declare que está usando este poder antes de fazer um ataque corpo a corpo. Você sofre -2 no teste de ataque, mas recebe +5 na rolagem de dano. Pré-requisito: For 13",
  },
  {
    nome: "Ataque Preciso",
    categoria:
      "Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico.Pré-requisito: Estilo de Uma Arma.",
  },
  {
    nome: "Bloqueio com Escudo",
    categoria:
      "Quando é atingido por um ataque, habilidade ou magia, você pode gastar 1 PM para receber resistência a dano contra este ataque igual ao bônus na Defesa que seu escudo fornece. Você só pode usar este poder se estiver usando um escudo. Pré-requisito: Estilo de Arma e Escudo.",
  },
  {
    nome: "Carga de Cavalaria",
    categoria:
      "Quando faz uma investida montada, você causa +2d8 pontos de dano. Além disso, pode continuar se movendo depois do ataque. Você deve se mover em linha reta e seu movimento máximo ainda é o dobro do seu deslocamento. Pré-requisito: Ginete.",
  },
  {
    nome: "Combate Defensivo",
    categoria:
      "Quando usa a ação atacar, você pode usar este poder. Se fizer isso, até seu próximo turno, sofre -2 em todos os testes de ataque, mas recebe +5 na Defesa. Pré-requisito: Int 13.",
  },
  {
    nome: "Derrubar Aprimorado",
    categoria:
      "Você recebe +2 em testes de ataque para derrubar. Quando derruba uma criatura com essa manobra, pode gastar 1 PM para fazer um ataque extra contra ela. Pré-requisito: Combate Defensivo",
  },
  {
    nome: "Desarmar Aprimorado",
    categoria:
      "Você recebe +2 em testes de ataque para desarmar. Quando desarma uma criatura, pode gastar 1 PM para arremessar a arma dela para longe. Para definir onde a arma cai, role 1d8 para a direção (sendo “1” diretamente à sua frente, “2” à frente e à direita e assim por diante, em sentido horário) e 1d6 para a distância (medida em quadrados de 1,5m a partir da criatura desarmada). Pré-requisito: Combate Defensivo.",
  },
  {
    nome: "Disparo Preciso",
    categoria:
      "Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade padrão de -5 no teste de ataque. Pré-requisito: Estilo de Disparo ou Estilo de Arremesso.",
  },
  {
    nome: "Disparo Rápido",
    categoria:
      "Se estiver usando uma arma de ataque à distância e gastar uma ação completa para atacar, você pode fazer um ataque adicional com ela (se puder recarregá-la como ação livre). Se fizer isso, sofre -2 em todos os testes de ataque até o seu próximo turno. Pré-requisito: Des 13, Estilo de Disparo ou Estilo de Arremesso.",
  },
  {
    nome: "Empunhadura Poderosa",
    categoria:
      "Ao usar uma arma feita para uma categoria de tamanho maior que a sua, a penalidade que você sofre nos testes de ataque diminui para -2 (normalmente, uma criatura que use uma arma feita para uma categoria de tamanho maior sofre uma penalidade de -5 nos testes de ataque). Pré-requisito: For 17.",
  },
  {
    nome: "Encouraçado",
    categoria:
      "Se estiver usando uma armadura pesada, você recebe +2 na Defesa. Esse bônus aumenta em +2 para cada outro poder que você possua que tenha Encouraçado como pré-requisito. Pré-requisito: proficiência com armaduras pesadas.",
  },
  {
    nome: "Esquiva",
    categoria: "Você recebe +2 em Defesa e Reflexos. Pré-requisito: Des 13",
  },
  {
    nome: "Estilo de Arma e Escudo",
    categoria:
      "Se você estiver usando um escudo, o bônus na Defesa que ele fornece aumenta em +2. Pré-requisitos: treinado em Luta, proficiência com escudos.",
  },
  {
    nome: "Estilo de Arremesso",
    categoria:
      "Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas. Pré-requisito: treinado em Pontaria.",
  },
  {
    nome: "Estilo de Disparo",
    categoria:
      "Se estiver usando uma arma de disparo, você soma o bônus de Destreza nas rolagens de dano. Pré-requisito: treinado em Pontaria.",
  },
  {
    nome: "Estilo de Duas Armas",
    categoria:
      "Se estiver usando duas armas (e pelo menos uma delas for leve) e fizer a ação atacar, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre -2 em todos os testes de ataque até o seu próximo turno. Se você possuir Ambidestria, não sofre essa penalidade. Pré-requisito: Des 15, treinado em Luta.",
  },
  {
    nome: "Estilo de Duas Mãos",
    categoria:
      "Se estiver usando uma arma corpo a corpo com as duas mãos, você recebe +5 nas rolagens de dano. Este poder não pode ser usado com armas leves. Pré-requisitos: For 15, Treinado em Luta",
  },
  {
    nome: "Estilo de Uma Arma",
    categoria:
      "Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma (exceto ataques desarmados). Pré-requisito: treinado em Luta.",
  },
  {
    nome: "Estilo Desarmado",
    categoria:
      "Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades). Pré-requisito: treinado em Luta",
  },
  {
    nome: "Fanático",
    categoria:
      "Seu deslocamento não é reduzido por usar armaduras pesadas. Pré-requisitos: 12º nível de personagem, Encouraçado.",
  },
  {
    nome: "Finta Aprimorada",
    categoria:
      "Você recebe +2 em testes de Enganação para fintar e pode fintar como uma ação de movimento. Pré-requisitos: treinado em Enganação e Luta.",
  },
  {
    nome: "Foco em Arma",
    categoria:
      "Escolha uma arma. Você recebe +2 em testes de ataque com essa arma. Você pode escolher este poder outras vezes para armas diferentes. Pré-requisito: proficiência com a arma.",
  },
  {
    nome: "Ginete",
    categoria:
      "Você passa automaticamente em testes de Cavalgar para não cair da montaria quando sofre dano. Além disso, não sofre penalidades para atacar à distância ou lançar magias quando montado. Pré-requisito: treinado em Cavalgar.",
  },
  {
    nome: "Inexpugnável",
    categoria:
      "Se estiver usando uma armadura pesada, você recebe +2 em todos os testes de resistência. Pré-requisitos: Encouraçado, 6º nível de personagem",
  },
  {
    nome: "Mira Apurada",
    categoria:
      "Você pode gastar uma ação de movimento para mirar. Se fizer isso, recebe +2 em testes de ataque e na margem de ameaça com ataques à distância até o fim do turno. Pré-requisitos: Sab 13, Disparo Preciso.",
  },
  {
    nome: "Presença Aterradora",
    categoria:
      "Você pode gastar uma ação padrão e 1 PM para assustar todas as criaturas a sua escolha em alcance curto. Veja a perícia Intimidação para as regras de assustar. Pré-requisito: treinado em Intimidação.",
  },
  {
    nome: "Proficiência",
    categoria:
      "Escolha uma proficiência: armas marciais, armas de fogo, armaduras pesadas ou escudos (se for proficiente em armas marciais, você também pode escolher armas exóticas). Você recebe essa proficiência. Você pode escolher este poder outras vezes para proficiências diferentes.",
  },
  {
    nome: "Quebrar Aprimorado",
    categoria:
      "Você recebe +2 em testes de ataque para quebrar. Quando reduz os PV de uma arma para 0 ou menos, você pode gastar 1 PM para realizar um ataque extra contra o usuário dela. O ataque adicional usa os mesmos valores de ataque e dano, mas os dados devem ser rolados novamente. Pré-requisito: Ataque Poderoso.",
  },
  {
    nome: "Reflexos de Combate",
    categoria:
      "Você ganha uma ação de movimento extra no seu primeiro turno de cada combate. Pré-requisito: Des 13.",
  },
  {
    nome: "Saque Rápido",
    categoria:
      "Você recebe +2 em Iniciativa e pode sacar ou guardar itens como uma ação livre (em vez de ação de movimento). Além disso, a ação que você gasta para recarregar uma arma de disparo diminui em uma categoria (ação completa para padrão, padrão para movimento, movimento para livre). Pré-requisito: treinado em Iniciativa",
  },
  {
    nome: "Trespassar",
    categoria:
      "Quando você faz um ataque corpo a corpo e reduz os pontos de vida do alvo para 0 ou menos, pode gastar 1 PM para fazer um ataque adicional contra outra criatura dentro do seu alcance. O ataque adicional usa os mesmos valores de ataque e dano, mas os dados devem ser rolados novamente. Pré-requisito: Ataque Poderoso.",
  },
  {
    nome: "Vitalidade",
    categoria:
      "Você recebe +1 PV por nível de personagem e +2 em Fortitude. Pré-requisito: Con 13.",
  },
  {
    nome: "Membro da Igreja",
    categoria:
      "Você consegue hospedagem e informação em qualquer templo de sua divindade, para você e seus aliados",
  },
  {
    nome: "Amigo Especial",
    categoria:
      "Você recebe +5 em testes de Adestramento com animais comuns. Além disso, possui um animal de estimação que o auxilia e o acompanha em suas aventuras. Em termos de jogo, é um aliado que fornece +2 em uma perícia a sua escolha (exceto Luta ou Pontaria e aprovada pelo mestre) e não conta em seu limite de aliados.",
  },
  {
    nome: "Lembranças Graduais",
    categoria:
      "Durante suas aventuras, em determinados momentos a critério do mestre, você pode fazer um teste de Sabedoria (CD 10) para reconhecer pessoas, criaturas ou lugares que tenha encontrado antes de perder a memória.",
  },
  {
    nome: "Sangue Azul",
    categoria:
      "Você tem alguma influência política, suficiente para ser tratado com mais leniência pela guarda, conseguir uma audiência com o nobre local etc",
  },
  {
    nome: "Frutos do Trabalho",
    categoria:
      "Quando passa em um teste de Ofício para sustento, você recebe o dobro do dinheiro",
  },
  {
    nome: "Dom artístico",
    categoria:
      "Quando usa a perícia Atuação para fazer uma apresentação e passa no teste, você ganha o dobro de tibares.",
  },
  {
    nome: "Esse Cheiro...",
    categoria:
      "Você recebe +2 em Fortitude e passa automaticamente em testes de Ofício (alquimia) para identificar itens alquímicos.",
  },
  {
    nome: "À Prova de Tudo",
    categoria:
      "Você não sofre penalidade em deslocamento e Sobrevivência por clima ruim e por terreno difícil natural.",
  },
  {
    nome: "Confissão",
    categoria:
      "Você pode usar Intimidação para obter informação sem custo (veja Investigação).",
  },
  {
    nome: "Alpinista Social",
    categoria:
      "Você pode substituir testes de Diplomacia por testes de Enganação",
  },
  {
    nome: "Truque de Mágica",
    categoria:
      "Você pode lançar Explosão de Chamas, Hipnotismo e Transmutar Objetos, mas apenas com o aprimoramento Truque. Esta não é uma habilidade mágica — os efeitos provêm de truques e prestidigitação",
  },
  {
    nome: "Punguista",
    categoria:
      "Você pode fazer testes de Ladinagem para sustento, como a perícia Ofício.",
  },
  {
    nome: "Médico de Campo",
    categoria:
      "Quando você faz primeiros socorros em um personagem com 0 ou menos PV, ele recupera 1d6 PV.",
  },
  {
    nome: "Busca Interior",
    categoria:
      "Quando você e seus companheiros estão diante de um mistério, incapazes de prosseguir, você pode gastar 1 PM para meditar sozinho durante algum tempo e receber uma dica do mestre.",
  },
  {
    nome: "Desejo de Liberdade",
    categoria:
      "Ninguém voltará a torná-lo um escravo! Você recebe +5 em testes contra efeitos que possam aprisioná-lo, como a manobra agarrar ou a magia Imobiliza ",
  },
  {
    nome: "Palpite Fundamentado",
    categoria:
      "Você pode gastar 2 PM para substituir um teste de qualquer perícia originalmente baseada em Inteligência ou Sabedoria por um teste de Conhecimento.",
  },
  {
    nome: "Água no Feijão",
    categoria:
      "Você gasta apenas metade da matéria-prima para testes de Ofício (cozinheiro",
  },
  {
    nome: "Cultura Exótica",
    categoria:
      "Por sua diferente visão de mundo, você encontra soluções inesperadas. Você pode gastar 1 PM para fazer um teste de perícia somente treinada, mesmo sem ser treinado na perícia",
  },
  {
    nome: "Pão e Circo",
    categoria:
      "Por seu treino em combates de exibição, você sabe “bater sem machucar”. Pode escolher causar dano não letal sem sofrer a penalidade de –5.",
  },

{
  nome: "a",
    categoria:""
},
  {
    nome: "Versátil",
    categoria:
      "Você se torna treinado em duas perícias a sua escolha (não precisam ser da sua classe).Você pode trocar uma dessas perícias por um poder geral a sua escolha",
  },

{
    nome: "Conhecimento das Rochas",
    categoria:
      "Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.",
  },
  {
    nome: "Devagar e Sempre",
    categoria:
      "Seu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento não é reduzido por uso de armadura ou excesso de carga.",
  },
  {
    nome: "Duro como Pedra",
    categoria:
      "Você recebe +3 pontos de vida no 1º nível e +1 por nível seguinte",
  },
  {
    nome: "Tradição de Heredrimm",
    categoria:
      "Você é perito nas armas tradicionais anãs, seja por ter treinado com elas, seja por usá-las como ferramentas de ofício. Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques com essas arma ",
  },
];

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", handleInput);
searchForm.addEventListener("submit", handleSubmit);

function handleInput() {
  const searchTerm = searchInput.value.toLowerCase();
  const autoCompleteResults = arrayPoderes.filter(function (poder) {
    return poder.nome.toLowerCase().includes(searchTerm);
  });
  displayAutoComplete(autoCompleteResults);
}

function handleSubmit(event) {
  event.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  const searchResultsArray = arrayPoderes.filter(function (poder) {
    return poder.nome.toLowerCase().includes(searchTerm);
  });
  displayResults(searchResultsArray);
}

function displayAutoComplete(autoCompleteArray) {
  const autoCompleteList = document.createElement("ul");
  autoCompleteList.setAttribute("id", "autoCompleteList");

  clearAutoComplete();

  if (autoCompleteArray.length > 0) {
    autoCompleteArray.forEach(function (poder) {
      const autoCompleteItem = document.createElement("li");
      autoCompleteItem.textContent = poder.nome;
      autoCompleteItem.addEventListener("click", function () {
        searchInput.value = poder.nome;
        clearAutoComplete();
      });
      autoCompleteList.appendChild(autoCompleteItem);
    });

    searchForm.appendChild(autoCompleteList);
  }
}
function clearAutoComplete() {
  const autoCompleteList = document.getElementById("autoCompleteList");
  if (autoCompleteList) {
    autoCompleteList.remove();
  }
}

function displayResults(resultsArray) {
  searchResults.innerHTML = "";

  if (resultsArray.length === 0) {
    searchResults.textContent = "Nenhum resultado encontrado.";
  } else {
    resultsArray.forEach(function (poder) {
      const poderElement = document.createElement("div");
      const nomeElement = document.createElement("p");
      const categoriaElement = document.createElement("p");

      nomeElement.textContent = poder.nome;
      categoriaElement.textContent = poder.categoria;

      poderElement.appendChild(nomeElement);
      poderElement.appendChild(categoriaElement);
      searchResults.appendChild(poderElement);
    });
  }
}
