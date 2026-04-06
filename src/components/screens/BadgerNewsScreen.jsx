import { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import CS571 from "@cs571/mobile-client";

import BadgerNewsItemCard from "../BadgerNewsItemCard";
import BadgerPreferencesContext from "../BadgerPreferencesContext";

function BadgerNewsScreen(props) {
    const [articles, prefs] = useContext(BadgerPreferencesContext);

    const filteredArticles = articles.filter(article =>
        article.tags.every(tag => prefs[tag])
    );

    return (
        <View style={{ flex: 1 }}>
           {filteredArticles.length > 0 ? (
                <FlatList
                    data={filteredArticles}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <BadgerNewsItemCard
                            article={item}
                            navigation={props.navigation}
                        />
                    )}
                    ListHeaderComponent={<Text style={{ fontSize: 32, margin: 12 }}>Articles</Text>}
                />
            ) : (
                <Text style={{ paddingTop: 30, textAlign: "center", fontSize: 18 }}>
                    No articles match your preferences.
                </Text>
            )}
        </View>
    );
}

export default BadgerNewsScreen;