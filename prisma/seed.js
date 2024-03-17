import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function createBook(book) {
  try {
    const bookCreated = await prisma.author.create({
      data: book,
    })

    console.log('Livro %s criado com sucesso!', bookCreated.title)
  } catch (error) {
    console.error('Erro ao criar autor %s: %s', book.title, book.title)
    throw error
  }
}

async function seed() {
  const books = [
    {
      title: 'Dom Quixote de la Mancha',
      description:
        'Primeiro romance moderno da literatura, a história do Cavaleiro Andante atravessou fronteiras e ganhou diversas formas literárias e artísticas. Cervantes predisse os embaraços da cultura do seu tempo ao retratar uma sociedade já seduzida pelo absolutismo da razão e interesses materiais.',
      author: 'Miguel de Cervantes Saavedra',
    },
    {
      title: 'Crime e Castigo',
      description:
        'Romance que explora a psicologia de um assassino e as complexidades morais da vida.',
      author: 'Fiódor Dostoiévski',
    },
    {
      title: 'Odisseia',
      description:
        'Uma das mais antigas e influentes obras da literatura ocidental, que narra a jornada de Odisseu após a Guerra de Troia.',
      author: 'Homero',
    },
    {
      title: 'Cem Anos de Solidão',
      description:
        'Realismo mágico em uma história épica que abrange várias gerações da família Buendía.',
      author: 'Gabriel García Márquez',
    },
    {
      title: 'A Divina Comédia',
      description:
        'Uma das obras-primas da literatura italiana, uma jornada épica através do Inferno, Purgatório e Paraíso.',
      author: 'Dante Alighieri',
    },
    {
      title: '1984',
      description:
        'Uma visão distópica de um futuro totalitário, onde o Estado exerce controle absoluto sobre a vida das pessoas.',
      author: 'George Orwell',
    },
    {
      title: 'Orgulho e Preconceito',
      description:
        'Um romance clássico que satiriza a sociedade inglesa do século XIX, enquanto narra o romance entre Elizabeth Bennet e Mr. Darcy.',
      author: 'Jane Austen',
    },
    {
      title: 'O Pequeno Príncipe',
      description:
        'Um conto filosófico que encanta leitores de todas as idades com sua simplicidade e sabedoria.',
      author: 'Antoine de Saint-Exupéry',
    },
    {
      title: 'O Apanhador no Campo de Centeio',
      description:
        'Um romance que explora a alienação adolescente e a busca por identidade.',
      author: 'J.D. Salinger',
    },
    {
      title: 'Os Miseráveis',
      description:
        'Um épico social que retrata as lutas e redenções de personagens em meio à Revolução Francesa.',
      author: 'Victor Hugo',
    },
    {
      title: 'Alice no País das Maravilhas',
      description:
        'Alice no País das Maravilhas é a obra infantil mais conhecida de Charles Lutwidge Dodgson, sob o pseudônimo de Lewis Carroll. O livro conta a história de uma menina chamada Alice que ao perseguir um coelho branco antropomórfico, acaba sendo transportada para um lugar fantástico, povoado de criaturas peculiares, como o Chapeleiro Louco, a Rainha de Copas, a Lagarta e o Gato de Cheshire. Ao longo de sua jornada, Alice vive diversas aventuras e é confrontada com o absurdo, com o impossível, e passa a questionar tudo o que aprendeu até ali. Essa é uma das obras mais célebres do gênero literário nonsense.',
      genres: 'Literatura fantástica, Literatura nonsense',
      author: 'Lewis Carroll',
    },
  ]

  for (const book of books) {
    await createBook(book)
  }
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
