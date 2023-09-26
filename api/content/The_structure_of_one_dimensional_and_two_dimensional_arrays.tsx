import { Div, H3, LO, List, P, Table, Title } from '@/components/Content'
import useStore from '@/store'

export default function The_structure_of_one_dimensional_and_two_dimensional_arrays() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>The structure of one-dimensional and two-dimensional arrays</Title>
            <LO>11.5.2.1 determine data structure of a one-dimensional array</LO>
            <Div>
                <H3>Data structure:</H3>
                <P>A collection of elementary data types such as integer, real, boolean, char.</P>
            </Div>
            <Div>
                <H3>Array:</H3>
                <P>A data structure that contains finite set of indexed elements of the same type, united by the same name.</P>
                <H3>1D array:</H3>
                <P>A group of elements having the same data type which are stored in a linear arrangement by indexes under a single variable name.</P>
            </Div>
            <LO>11.5.2.2 determine data structure of a two-dimensional array</LO>
            <Div>
                <H3>2D array:</H3>
                <P>An array where each element is represented by a one-dimensional array.</P>
                <P>Each element of a two-dimensional array has two indices: row number (i) and column number (j).</P>
                <P>Programmers usually indicate the line number of the variable i , the number of the column of the variable j.</P>
                <P>You can get the value of an element by two indexes. For example, arr[2][3]</P>
                <P>A two-dimensional array is used to create a table of data in rows and columns with the same data type.</P>
            </Div>
            <LO>11.5.2.3 apply basic algorithms (input, output, insert, delete) to one-dimensional arrays</LO>
            <Div>
                <H3>Input elements of array from the keyboard:</H3>
                <P>FOR i = 0 TO n - 1</P>
                <P>INPUT arr[i]</P>
                <P>endFOR</P>
            </Div>
            <Div>
                <H3>Output elements of array:</H3>
                <P>FOR i = 0 TO n - 1</P>
                <P>OUTPUT arr[i]</P>
                <P>endFOR</P>
            </Div>
            <Div>
                <H3>Inserting an element into the array:</H3>
                <P>FUNCTION INSERT(array, index, value)</P>
                <P><span className='ml-8'>FOR i = N DOWNTO index + 1</span></P>
                <P><span className='ml-8'><span className='ml-8'>array[i + 1] = array[i]</span></span></P>
                <P><span className='ml-8'>END FOR</span></P>
                <P><span className='ml-8'>array[index] = value</span></P>
                <P><span className='ml-8'>N = N + 1</span></P>
                <P>END FUNCTION</P>
            </Div>
            <Div>
                <H3>Deleting an element from the array:</H3>
                <P>FUNCTION DELETE(array, index)</P>
                <P><span className='ml-8'>FOR i = index TO N – 1</span></P>
                <P><span className='ml-8'><span className='ml-8'>array[i] = array[i + 1]</span></span></P>
                <P><span className='ml-8'>END FOR</span></P>
                <P><span className='ml-8'>N = N - 1</span></P>
                <P>END FUNCTION</P>
            </Div>
        </div>
    )
}