import { Div, H3, LO, List, P, Table, Title } from '@/components/Content'
import useStore from '@/store'

export default function Safety_methods() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Safety methods</Title>
            <LO>11.1.2.2 provide arguments for the necessity of the protection of data and computer system</LO>
            <Div>
                <H3>A successful data protection strategy helps prevent data loss and corruption and can mitigate the damage resulting from a breach or other data disaster.</H3>
            </Div>
            <Div>
                <H3>Preservation of Privacy:</H3>
                <P>Protecting computer systems is essential for preserving the privacy of individuals and organizations. Breaches can lead to the unauthorized access and misuse of personal information, which can be devastating for individuals and a violation of their rights.</P>
            </Div>
            <Div>
                <H3>Protection of Intellectual Property:</H3>
                <P>Companies invest heavily in research and development, creating valuable intellectual property. Protecting computer systems is essential to prevent theft or unauthorized access to this intellectual property, which can result in financial losses and damage to a company's competitive advantage.</P>
            </Div>
            <LO>11.1.2.3 describe data protection measures such as data backup and disk mirroring</LO>
            <Div>
                <H3>Backup:</H3>
                <P>Creation of a copy of data or files for storage on another disk or on another server. The backup media or files must be tagged to know when the backup was created and what it contains.</P>
                <P>Important files should be backed up periodically as files and data can be damaged, accidentally overwritten, or deleted.</P>
            </Div>
            <Div>
                <H3>Advantages of backup:</H3>
                <List>
                    <>We can recover data if the original data will be lost</>
                    <>You can store multiple copies in different locations</>
                </List>
                <H3>Disadvantages of backup:</H3>
                <List>
                    <>You will need extra memory to store a copy</>
                    <>If your backup will be in the same room as the original, then in case of fires, floods, this will not save your data</>
                </List>
            </Div>
            <Div>
                <H3>Types of backup:</H3>
                <List>
                    <>Local - portable storage is used (removable hard disk, flash memory, CD disks). It's easy to carry with you and your files will always be available to you</>
                    <>Remote/Cloud - the copy is held in cloud storage. Safer than home storage. It will not be affected by floods, fires and etc</>
                </List>
            </Div>
            <Div>
                <H3>Disk mirroring (RAID 1):</H3>
                <P>Replication of data across two or more disks. When mirroring, all involved disks are exact copies of each other. The default data synchronization is performed.</P>
                <P>Used to protect a computer system from loss of data and other potential losses due to disk failures.</P>
            </Div>
            <Div>
                <H3>Advantages of disk mirroring:</H3>
                <List>
                    <>This technology is simple and easy to implement</>
                    <>Provides high fault tolerance when working with two disks</>
                    <>If one hard drive fails, the data can be retrieved from the other mirrored hard drives</>
                </List>
            </Div>
            <Div>
                <H3>Disadvantages of disk formatting:</H3>
                <List>
                    <>The usable storage capacity is only half of the total disk capacity</>
                    <>You cannot replace a failed drive while the computer is running</>
                    <>If a virus attaches to a file and starts replicating, this will also happen on the mirrored disk</>
                    <>If you accidentally delete a file on one disk, it will be deleted on the other.</>
                </List>
            </Div>
            <LO>11.1.2.4 describe data protection measures such as encryption and access rights to data (authorization)</LO>
            <Div>
                <H3>Encryption:</H3>
                <P>Process of scrambling data so that it becomes very difficult to unscramble and interpret without the correct key</P>
                <P>Encrypted data is known as ciphertext, and the original interpretable data is known as plaintext. The process of encryption is carried out using a cryptographic algorithm and a key</P>
            </Div>
            <Div>
                <H3>Symmetric (Private key) encryption:</H3>
                <P>Uses the same key to encrypt and decrypt data. This means that the key must also be transferred (known as key exchange) to the same destination as the ciphertext which causes obvious security problems. The key can be intercepted as easily as the ciphertext message to decrypt the data. For this reason, asymmetric encryption can be used instead</P>
            </Div>
            <Div>
                <H3>Asymmetric (Public key) encryption:</H3>
                <P>Asymmetric encryption uses two separate, but related keys. One key, known as the public key, is made public so that others wishing to send you data can use this to encrypt the data. This public key cannot decrypt data. Another private key is known only by you and only this can be used to decrypt the data. It is virtually impossible to deduce the private key from the public key. It is possible that a message could be encrypted using your own public key and sent to you by a malicious third party impersonating a trusted individual. To prevent this, a message can be digitally 'signed' to authenticate the sender</P>
            </Div>
            <Div>
                <H3>Access rights to data (authorization):</H3>
                <P>Access rights to data are one measure that restricts access to sensitive data to authorized individuals only.</P>
                <P>Data protection measures are processes and procedures put in place to ensure the confidentiality, integrity, and availability of data.</P>
                <P>Data access rights refer to the permissions granted to users or groups to access specific data. These permissions can be managed through access control mechanisms, such as user authentication, authorization, and auditing.</P>
            </Div>
        </div>
    )
}