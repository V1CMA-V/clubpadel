import FAQ from './components/FAQ'
import { Hero } from './components/hero'
import { Bracket } from './components/matchs'
import Ranking from './components/ranking'

export default function TournamentPage() {
  return (
    <>
      <Hero />
      <Bracket />
      <Ranking />
      <FAQ />
    </>
  )
}
