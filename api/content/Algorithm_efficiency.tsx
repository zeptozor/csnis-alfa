import { Div, H3, LO, List, P, Table, Title } from '@/components/Content'
import useStore from '@/store'

export default function Algorithm_efficiency() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Algorithm efficiency</Title>
            <LO>11.5.2.6 understand the temporal efficiency of algorithms</LO>
            <Div>
                <H3>Algorithm complexity:</H3>
                <P>A way to formally measure how fast a program or algorithm runs.</P>
            </Div>
            <Div>
                <H3>Time efficiency of algorithm:</H3>
                <P>Algorithms may be compared on how much time they need to solve a particular problem. This is an algorithm's time efficiency.</P>
                <P>The goal is to design algorithms which will run quickly.</P>
                <P>In order to compare the efficiency of different algorithms in terms of execution time, we need to quantify the number of basic operations or steps that the algorithm will need, in terms of the number of items to be processed.</P>
            </Div>
            <Div>
                <H3>Big O:</H3>
                <P>Notations used to measure how well a computer algorithm scales as the amount of data involved increases.</P>
                <P>Big-O establishes a worst-case run time.</P>
            </Div>
            <Div>
                <H3>O(1) (Constant time):</H3>
                <P>O(1) describes an algorithm that takes constant time (the same amount of time) to execute regardless of the size of the input data set.</P>
            </Div>
            <Div>
                <H3>O(n) (linear time):</H3>
                <P>O(n) describes an algorithm whose performance will grow in linear time, in direct proportion to the size of the data set. For example, a linear search of an array of 1000 unsorted items will take 1000 times longer than searching an array of 1 item.</P>
            </Div>
            <Div>
                <H3>O(n^2) (Polynomial time):</H3>
                <P>O(n^2) describes an algorithm whose performance is directly proportional to the square of the size of the data set. A program with two nested loops each performed n times will typically have an order of time complexity O(n^2). The running time of the algorithm grows in polynomial time.</P>
            </Div>
            <Div>
                <H3>O(log n) (Logarithmic time):</H3>
                <P>The time taken to execute an algorithm of order O(log n) (logarithmic time) will grow very slowly as the size of the data set increases.  Doubling the size of the data set has very little effect on the time the algorithm takes to complete. (Note that in Big-O notation the base of the logarithm, 2 in this case, is not specified because it is irrelevant to the time complexity, being a constant factor.)</P>
            </Div>
            <Div>
                <H3>O(n!) (Exponential time):</H3>
                <P>The time taken to execute an algorithm of order O(n!) will grow very quickly, faster than O(2^n). Suppose that the problem is to find all the permutations of n letters. If n=2, there are 2 permutations to find. If n=6, there are 720 permutations - far more than 2n, which is only 64.</P>
            </Div>
        </div>
    )
}