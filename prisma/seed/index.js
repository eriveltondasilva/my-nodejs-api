import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createAuthorWithBooks(authorData) {
  try {
    await prisma.author.create({
      data: {
        name: authorData.name,
        books: {
          create: authorData.books.map((book) => ({
            title: book.title,
            description: book.description,
            published: book.published,
          })),
        },
      },
    })
  } catch (error) {
    console.error(`Erro ao criar autor ${authorData.name}: ${error.message}`)
    throw error
  }
}

async function main() {
  const authors = [
    {
      name: 'Miguel de Cervantes Saavedra',
      books: [
        {
          title: 'Dom Quixote de la Mancha',
          description:
            'Primeiro romance moderno da literatura, a história do Cavaleiro Andante atravessou fronteiras e ganhou diversas formas literárias e artísticas. Cervantes predisse os embaraços da cultura do seu tempo ao retratar uma sociedade já seduzida pelo absolutismo da razão e interesses materiais.',
        },
      ],
    },
    {
      name: 'Fiódor Dostoiévski',
      books: [
        {
          title: 'Crime e Castigo',
          description:
            'Romance que explora a psicologia de um assassino e as complexidades morais da vida.',
        },
      ],
    },
    {
      name: 'Homero',
      books: [
        {
          title: 'Odisseia',
          description:
            'Uma das mais antigas e influentes obras da literatura ocidental, que narra a jornada de Odisseu após a Guerra de Troia.',
        },
      ],
    },
    {
      name: 'Gabriel García Márquez',
      books: [
        {
          title: 'Cem Anos de Solidão',
          description:
            'Realismo mágico em uma história épica que abrange várias gerações da família Buendía.',
        },
      ],
    },
    {
      name: 'Dante Alighieri',
      books: [
        {
          title: 'A Divina Comédia',
          description:
            'Uma das obras-primas da literatura italiana, uma jornada épica através do Inferno, Purgatório e Paraíso.',
        },
      ],
    },
    {
      name: 'George Orwell',
      books: [
        {
          title: '1984',
          description:
            'Uma visão distópica de um futuro totalitário, onde o Estado exerce controle absoluto sobre a vida das pessoas.',
        },
      ],
    },
    {
      name: 'Jane Austen',
      books: [
        {
          title: 'Orgulho e Preconceito',
          description:
            'Um romance clássico que satiriza a sociedade inglesa do século XIX, enquanto narra o romance entre Elizabeth Bennet e Mr. Darcy.',
        },
      ],
    },
    {
      name: 'Antoine de Saint-Exupéry',
      books: [
        {
          title: 'O Pequeno Príncipe',
          description:
            'Um conto filosófico que encanta leitores de todas as idades com sua simplicidade e sabedoria.',
        },
      ],
    },
    {
      name: 'J.D. Salinger',
      books: [
        {
          title: 'O Apanhador no Campo de Centeio',
          description:
            'Um romance que explora a alienação adolescente e a busca por identidade.',
        },
      ],
    },
    {
      name: 'Victor Hugo',
      books: [
        {
          title: 'Os Miseráveis',
          description:
            'Um épico social que retrata as lutas e redenções de personagens em meio à Revolução Francesa.',
        },
      ],
    },
  ]

  for (const authorData of authors) {
    await createAuthorWithBooks(authorData)
  }

  await prisma.$disconnect()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
