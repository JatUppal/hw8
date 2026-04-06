import { useContext } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

import BadgerPreferencesContext from "../BadgerPreferencesContext";

function BadgerPreferencesScreen(props) {
    const [articles, prefs, setPrefs] = useContext(BadgerPreferencesContext);

    const tags = Object.keys(prefs);

    const handleToggle = (tag) => {
        setPrefs({
            ...prefs,
            [tag]: !prefs[tag]
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Preferences</Text>
            {tags.map(tag => (
                <View key={tag} style={styles.row}>
                    <Text style={styles.label}>{tag}</Text>
                    <Switch
                        value={prefs[tag]}
                        onValueChange={() => handleToggle(tag)}
                    />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    header: {
        fontSize: 28,
        marginBottom: 16
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 8
    },
    label: {
        fontSize: 18
    }
});

export default BadgerPreferencesScreen;