import React from "react";

import {Image, Link, StyleSheet, Text, View} from "@react-pdf/renderer";
import {renderLocationText} from "../common/core/location";

const styles = StyleSheet.create({
    pdfHeader: {
        flexDirection: "row",
    },

    name: {
        fontSize: "28pt",
        marginBottom: 2,
        fontFamily: "Helvetica-Bold"
    },

    quote: {
        fontSize: "24pt",
        marginBottom: 4,
    },

    description: {
        marginTop: 18,
        marginLeft: 0,
        fontFamily: "Helvetica-Oblique",
        fontSize: "14pt",
        width: "65%",
        textAlign: "center"
    },

    link: {
        fontSize: "14pt",
        color: "#007bff"
    },

    other: {
        fontSize: "14pt"
    },

    section: {
        margin: 0,
        padding: 0,
    }
});

const PdfHeader = (props) => (
    <View style={styles.pdfHeader}>
        <View style={styles.section}>
            <Image src={props.data.urls.picture} style={{width: 124}}/>
        </View>
        <View style={{...styles.section, paddingLeft: 38, paddingTop: 12}}>
            <Text style={styles.name}>{props.data.firstName} {props.data.lastName}</Text>
            <Text style={styles.quote}>{props.data.quote}</Text>
            <Text style={styles.other}> {renderLocationText(props.data.location, true)}</Text>
            <Text style={styles.other}>{props.data.mail}</Text>
            <Text style={styles.link}><Link
                src={props.data.urls.portfolio}>{props.data.urls.portfolio.split("://")[1]}</Link></Text>
            <Text style={styles.description}>“{props.data.description}”</Text>
        </View>
    </View>);

export default PdfHeader;