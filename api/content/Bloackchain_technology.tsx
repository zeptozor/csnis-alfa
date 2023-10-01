import { Div, H3, LO, List, P, Table, Title } from '@/components/Content'
import useStore from '@/store'

export default function Blockchain_technology() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Blockchain technology</Title>
            <LO>11.1.2.6 explain the function and operation of Blockchain technologies</LO>
            <Div>
                <H3>Blockchain:</H3>
                <P>Decentralized, distributed, and oftentimes public, digital ledger that is used to record transactions across many computers so that any involved record cannot be altered retroactively, without the alteration of all subsequent blocks.</P>
            </Div>
            <Div>
                <H3>Features of blockchain:</H3>
                <List>
                    <>All transactions are written on the ledger</>
                    <>Transaction irrevocability</>
                    <>Distributed - there is no central authority</>
                    <>Easy to share data on transactions, contracts, etc.</>
                    <>Encryption for privacy and security</>
                </List>
            </Div>
            <Div>
                <H3>The three pillars of Blockchain technology:</H3>
                <List>
                    <Div>
                        <H3>Decentralization:</H3>
                        <P>Before Bitcoin and BitTorrent, we were used to centralized services. Centralized object that stores all the data, and you will have to interact exclusively with this object to get the information you need.</P>
                        <P>Decentralized systems do not have the power to dictate the truth to other network participants. Each member of the network can access the transaction history or confirm new transactions.</P>
                    </Div>
                    <Div>
                        <H3>Transparency:</H3>
                        <P>The person's identity is encrypted and represented only by his public address. In the transaction "Anwar sent 3 BTC", you can see only "1MF1bhsFLkBzzz9vpFYEmvwT2TbyCt7NZJ sent 3 BTC".</P>
                        <P>This way, while a person's real identity is protected, you will still see all the transactions that were made to their public address. This level of transparency has never existed in the financial system before.</P>
                    </Div>
                    <Div>
                        <H3>Immutability:</H3>
                        <P>Immutability in the context of a blockchain means that once something has been entered into the blockchain, it cannot be changed. This prevents financial scams.</P>
                        <P>The reason the blockchain gets this property is due to the cryptographic hash function.</P>
                        <P>In simple terms, hashing means taking an input string of any length and outputting an output of a fixed length.</P>
                        <P>In the context of cryptocurrencies like bitcoin, transactions are accepted as input and passed through a hashing algorithm (bitcoin uses SHA-256), which results in a fixed length result.</P>
                    </Div>
                </List>
            </Div>
        </div>
    )
}