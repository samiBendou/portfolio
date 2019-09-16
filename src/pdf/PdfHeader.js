import React from "react";

import {Image, StyleSheet, Text, View} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    pdfHeader: {
        flexDirection: "row",
    },

    name: {
        fontSize: "32pt",
        marginBottom: 2,
        fontFamily: "Helvetica-Bold"
    },

    quote: {
        fontSize: "24pt",
        marginBottom: 8,
    },

    description: {
        marginTop: 16,
        fontSize: "14pt",
        width: "65%"
    },

    other: {
    },

    section: {
        margin: 0,
        padding: 0,
    }
});

const PdfHeader = (props) => (
    <View style={styles.pdfHeader}>
        <View style={styles.section}>
            <Image src={props.data.urls.picture} style={{width: 150}}/>
        </View>
        <View style={{...styles.section, paddingLeft: 12, paddingTop: 12}}>
            <Text style={styles.name}>{props.data.firstName} {props.data.lastName}</Text>
            <Text style={styles.quote}>{props.data.quote}</Text>
            <Text style={styles.other}>{props.data.mail}</Text>
            <Text style={styles.other}>{props.data.urls.portfolio.split("://")[1]}</Text>
            <Text style={styles.description}>“{props.data.description}”</Text>
        </View>
    </View>);

export default PdfHeader;