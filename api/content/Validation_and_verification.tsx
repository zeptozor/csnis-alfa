import { Div, H3, LO, List, P, Table, Title } from '@/components/Content'
import useStore from '@/store'

export default function Validation_and_verification() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Validatoin and verification</Title>
            <LO>11.1.2.5 explain the difference between the terms verification and validation</LO>
            <Div>
                <H3>Validation:</H3>
                <P>Automatic computer check to make sure that the entered data meets the requirements.</P>
                <Table>
                    <>
                        <>Type of validation</>
                        <>How it works</>
                        <>Example usage</>
                    </>
                    <>
                        <>Check digit</>
                        <>One or several digits in a code are used to check the other digits are correct</>
                        <>Algorithm Luna check last digit in credit card, bar code readers in supermarkets use check digits</>
                    </>
                    <>
                        <>Format check</>
                        <>Checks the data is in the right format</>
                        <>A motobyke number in Kazakhstan is in the form NN NN LL where L is any letter and N is any number</>
                    </>
                    <>
                        <>Length check</>
                        <>Checks the data isn't too short or too long</>
                        <>A password which needs to be eight letters long</>
                    </>
                    <>
                        <>Lookup table/Lookup check</>
                        <>Looks up acceptable values in a table</>
                        <>When entering a social network, it searches the database for an existing username, there are only seven possible days of the week</>
                    </>
                    <>
                        <>Presence check</>
                        <>Checks that data has been entered into a field</>
                        <>In most databases a key field cannot be left blank</>
                    </>
                    <>
                        <>Range check</>
                        <>Checks that a value falls within the specified range</>
                        <>Number of hours worked must be less than 50 and more than 0</>
                    </>
                    <>
                        <>Spell check</>
                        <>Looks up words in a dictionary</>
                        <>When word processing</>
                    </>
                    <>
                        <>Character check</>
                        <>When a field has to contain a specific character or type of characters</>
                        <>An e-mail address should contain an "@" sign</>
                    </>
                    <>
                        <>Type check</>
                        <>When a field has be of a certain data type</>
                        <>integer, float/real</>
                    </>
                </Table>
            </Div>
            <Div>
                <H3>Verification</H3>
                <P>Performed to ensure that the data entered exactly matches the original data / source data.</P>
                <Table>
                    <>
                        <>Type of verification</>
                        <>Definition</>
                    </>
                    <>
                        <>Double entry</>
                        <>Think about when you choose a new password, you have to type it in twice. It verifies that the first version is correct by matching it against the second version. Whilst this can help to identify many mistakes, it is not ideal for large amounts of data.</>
                    </>
                    <>
                        <>Proofreading data or Visual check</>
                        <>It can help pick up errors where data has been entered incorrectly or transposed. However, it isn't always that easy to keep moving your eyes back and forth between a monitor and a paper copy. Also, if you are tired or your eyes feel 'blurry' then you might miss errors.</>
                    </>
                    <>
                        <>Printing out a copy of the data and comparing the printout to the original paper document</>
                        <>This is probably the easiest of the verification methods because you can have both copies side by side and scan both for mistakes. However, it can be time consuming if there is a large amount of data to check and if you do it too quickly, mistakes could be overlooked.</>
                    </>
                </Table>
            </Div>
        </div>
    )
}