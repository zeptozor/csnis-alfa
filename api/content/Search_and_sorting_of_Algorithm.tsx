import { Div, H3, Image, LO, List, P, Table, Title } from '@/components/Content'
import useStore from '@/store'

export default function Search_and_sorting_of_Algorithm() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Search and sorting of Algorithm</Title>
            <LO>11.5.2.4 write a pseudo-code for sorting by insert and bubble</LO>
            <Div>
                <H3>Sorting:</H3>
                <P>Putting items of data into a precise order, for example alphabetical or numerical.</P>
                <P>When we sorting data items it is essential to compare them with each other so that they can be put into the correct order.</P>
                <P>There may be millions of items of data to compare, so sorting algorithms must carry out the task as efficiently as possible so as not to cause a bottleneck - another part of the program may not be able to run until the sorting has been carried out.</P>
            </Div>
            <Div>
                <H3>Bubble sort:</H3>
                <Image name='bubblesort.jpg' />
                <H3>Pseudocode:</H3>
                <P>N = Array.Size</P>
                <P>for i = 0 to N-2</P>
                <P><span className='ml-8'>for j = 0 to N-i-2</span></P>
                <P><span className='ml-8'><span className='ml-8'>if arr[j] &gt; arr[j+1]</span></span></P>
                <P><span className='ml-8'><span className='ml-8'><span className='ml-8'>then buf = arr[j]</span></span></span></P>
                <P><span className='ml-8'><span className='ml-8'><span className='ml-8'><span className='ml-8'>arr[j] = arr[j+1]</span></span></span></span></P>
                <P><span className='ml-8'><span className='ml-8'><span className='ml-8'><span className='ml-8'>arr[j+1] = buf</span></span></span></span></P>
                <P><span className='ml-8'><span className='ml-8'>endif</span></span></P>
                <P><span className='ml-8'>enfor j</span></P>
                <P>enfor i</P>
            </Div>
            <Div>
                <H3>Insertion sort:</H3>
                <P>A simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.</P>
                <Image name='insertionsort.jpg' />
                <H3>Pseudocode:</H3>
                <P>N = Array.Size</P>
                <P>for j = 1 to N - 1</P>
                <P><span className='ml-8'>i = j</span></P>
                <P><span className='ml-8'>while arr[i] &lt; arr[i-1]</span></P>
                <P><span className='ml-8'><span className='ml-8'>buf = arr[i]</span></span></P>
                <P><span className='ml-8'><span className='ml-8'>arr[i] = arr[i-1]</span></span></P>
                <P><span className='ml-8'><span className='ml-8'>arr[i-1] = buf</span></span></P>
                <P><span className='ml-8'><span className='ml-8'>if i &gt; 1</span></span></P>
                <P><span className='ml-8'><span className='ml-8'><span className='ml-8'>then i = i - 1</span></span></span></P>
                <P><span className='ml-8'><span className='ml-8'>endif</span></span></P>
                <P><span className='ml-8'>endwhile</span></P>
                <P>endfor</P>
            </Div>
            <LO>11.5.2.5 write a pseudo-code of binary search for the solution of a specific problem</LO>
            <Div>
                <H3>Search in an array:</H3>
                <P>Searching is looking through the elements of an array to see if a particular piece of data is there. </P>
            </Div>
            <Div>
                <H3>Binary search:</H3>
                <P>Binary search divides the array in half and determines the part of the array that contains the key value.</P>
                <P>To perform a binary search, the array must be sorted.</P>
            </Div>
        </div>
    )
}