// import { isDark } from './tools'

export interface Introduce {
  words: string
  keyword: string[]
  color: string[]
  weight: number
}

export const myIntroduce: Introduce[] = [
  {
    words: "Hi, I'm Promise L.",
    keyword: ['Promise L 👋'],
    color: ['#7DB9DE'],
    weight: 10
  },
  {
    words: "I'm a software engineer in Beijing.",
    keyword: ['Software Engineer 💻', 'Beijing'],
    color: ['#E03C8A', '#FFB11B'],
    weight: 6
  },
  {
    words: 'I work on frontend and Node.js development.',
    keyword: ['Frontend 🖖', 'Node.js'],
    color: ['#F6C555', '#79b362'],
    weight: 7
  },
  {
    words: "I'm passionate about Vue.js and Vite.",
    keyword: ['Vue.js', 'Vite⚡'],
    color: ['#3eaf7c', '#ba38fe'],
    weight: 7
  },
  {
    words: 'I also like React.',
    keyword: ['React'],
    color: ['#61dafb'],
    weight: 5
  },
  // {
  //   words: "I'm learning WebGL and often use ThreeJS.",
  //   keyword: ['WebGL 🚀', 'three.js'],
  //   color: ['#7B90D2', '#049EF4'],
  //   weight: 5
  // },
  {
    words: 'I often hang out on Github. Open source is cool!',
    keyword: ['Github', 'Open Source'],
    color: ['#555', '#33a6b8'],
    weight: 6
  },
  {
    words: 'Video game and movie and fitness are my favorite!',
    keyword: ['Video Games 🎮', 'Movies 🎥', 'Fitness 💪'],
    color: ['#B481BB', '#F19483', '#F19483'],
    weight: 6
  }
]
