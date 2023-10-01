interface unit {
    heading: string
    topics: topics
}

interface term {
    'A': unit
    'B': unit
    'C': unit | null
}

type topics = {
    [key: string]: string[]
}

interface result {
    key: string
    heading: string
    topics: topics
}

type eleven = [term, term, term, term]
type twelve = [term, term, term]

export default function getLearningObjectives(grade: eleven | twelve): result[] {
    const result: result[] = [];
    for (let term of grade) {
        Object.entries(term).map(([key, unit]: [string, unit]) => {
            result.push({
                key: `${String(grade.indexOf(term) + 1)}.${key}`,
                heading: unit.heading,
                topics: unit.topics
            })
        })
    }
    return result
}