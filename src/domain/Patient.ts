import Session from './Session'

export default class Patient {
    id: string
    weight: number
    age: number
    genre: string
    sessions: Session[]

    constructor(id: string, weight: number, age: number, genre: string) {
        this.id = id
        this.weight = weight
        this.age = age
        this.genre = genre
        this.sessions = []
    }

    addSession(session: Session) {
        this.sessions.push(session)
    }

    getMonotonyResult() {
        const loadsBySession = this.sessions
            .map(session => session.getTimeMinutesTotal() * session.ratePerceivedExertion)
        const meanLoad = loadsBySession.reduce((accum, curr) => accum + curr, 0) / this.sessions.length
        const highLoad = loadsBySession.map(number => (number - meanLoad) ** 2)
        const totalLoad = highLoad.reduce((accum, curr) => accum + curr, 0)
        const stdLoad = Math.sqrt(totalLoad / this.sessions.length) 
        const monotonyResult = meanLoad / stdLoad
        return Number(monotonyResult.toFixed(2))
    }

    getStrainResult() {
        const loadsBySession = this.sessions
            .map(session => session.getTimeMinutesTotal() * session.ratePerceivedExertion)
        const weeklyLoad = loadsBySession.reduce((accum, curr) => accum + curr, 0)
        const monotomy = this.getMonotonyResult()
        const strainResult = weeklyLoad * monotomy
        return strainResult
    }
}