import { Div, H3, LO, List, P, Table, Title } from '@/components/Content'
import useStore from '@/store'

export default function Ethics_and_ownership() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Ethics and ownership</Title>
            <LO>11.1.3.1 follow the copyright law when developing applications</LO>
            <Div>
                <P>In today's digital age, understanding copyright law is crucial for application developers. Copyright law protects creators' rights over their original works, and not adhering to it can lead to legal consequences, including lawsuits and penalties. </P>
                <P>Developers must be aware of various copyright licenses, obtain permissions for copyrighted material, and take precautions to avoid infringement. By following copyright law, developers can build ethical and responsible applications.</P>
            </Div>
            <LO>11.1.3.2 describe specifics of open source software</LO>
            <Div>
                <H3>Open source software:</H3>
                <List>
                    <>Definition: Software distributed with a license allowing source code access and modification</>
                    <>Cost: Usually free for users</>
                    <>Source Code Access: Users can modify and customize the source code</>
                    <>Community Development: Collaboratively developed by a community of developers</>
                    <>Licensing: Typically under licenses like the GNU General Public License (GPL)</>
                    <>Transparency: Source code is openly available for review</>
                </List>
            </Div>
            <LO>11.1.3.3 describe specifics of closed source software</LO>
            <Div>
                <H3>Closed-source software:</H3>
                <List>
                <>Definition: Software without source code access</>
                <>Proprietary: Source code is confidential and not public</>
                <>Cost: Often requires payment for use</>
                <>Development Control: Developed by a single entity or a limited group</>
                <>Licensing: User's ability to modify or redistribute is restricted</>
                <>Transparency: Source code not accessible to outsiders</>
                </List>
            </Div>
            <LO>11.1.3.4 restrict access to data made available through the Internet using a variety of methods</LO>
            <Div>
                <H3>Access restriction:</H3>
                <P>Safeguards sensitive data from unauthorized access, modification, or theft. It is vital for maintaining data security.</P>
            </Div>
            <Div>
                <H3>Access resctriction methods:</H3>
                <List>
                    <>Authentication - verifies user identity (username, password, biometrics)</>
                    <>Authorization - after authentication, determines access levels based on roles or permissions</>
                    <>Encryption - protects data from unauthorized access through encoding</>
                    <>Firewalls - blocks unauthorized network traffic from entering or leaving a system</>
                </List>
            </Div>
            <Div>
                <H3>Internet Data Access Restriction Methods:</H3>
                <List>
                    <>Password Protection - requires a username and password for access, ensuring only authorized users can access data</>
                    <>Access Controls - restricts access to parts of a website or service based on permissions or roles</>
                    <>IP Address Restrictions - limits access based on the user's device IP address, useful for geographic or network-based restrictions</>
                    <>Geolocation Restrictions - limits access based on the user's physical location, often for compliance or relevance to specific regions</>
                    <>Encryption - protects data during transmission, ensuring only authorized users with decryption keys can access it</>
                    <>Digital Rights Management (DRM) - controls usage of digital content (e.g., music, videos) to prevent unauthorized copying or sharing</>
                </List>
            </Div>
            <LO>11.1.3.5 evaluate risks of using cloud technologies</LO>
            <Div>
                <H3>Cloud technologies</H3>
                <P>Cloud technologies refer to a set of services, applications, and infrastructure that are delivered to users over the internet.</P>
                <P>Cloud technologies are typically provided by third-party vendors, such as:</P>
                <List>
                    <>Amazon Web Services</>
                    <>Microsoft Azure</>
                    <>Google Cloud Platform</>
                </List>
            </Div>
            <Div>
                <H3>Risks of Using Cloud Technologies:</H3>
                <List>
                    <>Data Security - storing data on third-party servers may risk unauthorized access. Encryption and access controls are essential for mitigating this risk</>
                    <>Dependence on Providers - reliance on cloud providers can lead to downtime or disruptions. Mitigation involves choosing reputable providers and implementing backup and redundancy measures</>
                    <>Compliance and Regulatory Issues - cloud usage may conflict with data privacy and security regulations. Mitigation includes selecting compliant providers and establishing appropriate contracts</>
                    <>Data Loss or Corruption - inadequate data backup and storage can result in data loss or corruption. Proper backup and disaster recovery measures are necessary for mitigation</>
                    <>Lack of Control - reduced control over applications and data can limit customization and quick changes. To mitigate, choose flexible providers and use monitoring and management tools</>
                </List>
            </Div>
        </div>
    )
}