import React from 'react';
import {StyleSheet, Text, View} from "@react-pdf/renderer";
import {renderDateString} from "../../common/date";

const styles = StyleSheet.create({
    title: {
        marginTop : 4,
        fontSize: "18pt",
        fontFamily: "Helvetica-Bold",
    },

    date: {
        marginTop : 4,
        fontSize: "10pt",
        fontFamily: "Helvetica-Bold"
    },

    company: {
        fontSize: "14pt",
        marginBottom : 8
    },

    text: {
        fontSize: "11pt",
        width: "70%"
    }
});

const PdfTimelineItem = (props) => (
    <View style={{flexDirection:"col"}}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.date}>{renderDateString(new Date(props.date), props.duration)}</Text>
        <Text style={styles.company}>{props.company.name}</Text>
        <Text style={styles.text}>{props.text}</Text>
    </View>
);

export default  PdfTimelineItem;