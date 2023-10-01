import { Div, H3, LO, List, P, Table, Title } from '@/components/Content'
import useStore from '@/store'

export default function Data_analysis() {
    const ref = useStore.accordion(state => state.topicRef)
    return (
        <div ref={ref}>
            <Title>Data analysis</Title>
            <LO>11.2.1.3 describe data collection methods</LO>
            <Div>
                <H3>Surveys and Questionnaires:</H3>
                <P>Surveys and questionnaires are structured data collection tools that involve asking a series of questions to respondents.</P>
                <P>They can be administered in person, over the phone, via email, or through online survey platforms.</P>
                <P>Surveys and questionnaires are useful for collecting large amounts of quantitative data.</P>
            </Div>
            <Div>
                <H3>Interviews:</H3>
                <P>Interviews involve one-on-one or group interactions between an interviewer and respondents.</P>
                <P>IThey can be structured (with predefined questions) or unstructured (allowing for open-ended discussions).</P>
                <P>Interviews are useful for collecting detailed qualitative data and insights.</P>
            </Div>
            <Div>
                <H3>Observations:</H3>
                <P>Observational data collection involves systematically watching and recording behaviors, events, or processes.</P>
                <P>Observations can be done in a natural setting (field observations) or within controlled environments (laboratory observations).</P>
                <P>They are particularly valuable for studying human behavior, physical phenomena, and processes.</P>
            </Div>
            <Div>
                <H3>Document and Content Analysis:</H3>
                <P>his method involves analyzing existing documents, records, or content, such as reports, texts, social media posts, or historical data.</P>
                <P>Content analysis can help uncover patterns, trends, and insights from written or recorded information.</P>
            </Div>
            <Div>
                <H3>Focus Groups:</H3>
                <P>Focus groups are structured group discussions led by a facilitator.</P>
                <P>They bring together a small group of participants to explore specific topics or issues in depth.</P>
                <P>Focus groups are often used in market research and qualitative studies to gather opinions and ideas.</P>
            </Div>
            <Div>
                <H3>Sensor Data and IoT Devices:</H3>
                <P>In the era of the Internet of Things (IoT), data can be collected from various sensors and devices, such as temperature sensors, GPS trackers, and fitness wearables.</P>
                <P>This data can provide real-time information about physical and environmental conditions.</P>
            </Div>
            <Div>
                <H3>Web Scraping and Data Mining:</H3>
                <P>Web scraping involves extracting data from websites and online sources.</P>
                <P>Data mining involves discovering patterns and insights from large datasets, often in databases or data warehouses.</P>
            </Div>
            <Div>
                <H3>Experimental Research:</H3>
                <P>Experimental data collection involves manipulating variables and conducting controlled experiments to study cause-and-effect relationships.</P>
                <P>This method is common in scientific research and hypothesis testing.</P>
            </Div>
            <Div>
                <H3>Social Media and Online Surveys:</H3>
                <P>Data can be collected from social media platforms and online surveys to gain insights into user behavior, sentiment, and trends.</P>
                <P>Social media analytics tools are used to process and analyze this data.</P>
            </Div>
            <Div>
                <H3>Remote Sensing and Satellite Imagery:</H3>
                <P>Remote sensing techniques use satellite or aerial imagery to gather data about Earth's surface, including weather patterns, vegetation, and land use.</P>
            </Div>
        </div>
    )
}