import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function BadgerNewsItemCard(props) {
    const article = props.article;
    const navigation = props.navigation;

    return (
        <Pressable onPress={() => navigation.navigate("Article", { fullArticleId: article.fullArticleId })}>
            <View style={styles.card}>
                <Image
                    source={{ uri: "https://raw.githubusercontent.com/CS571-S26/hw8-api-static-content/main/" + article.img }}
                    style={styles.image}
                />
                <Text style={styles.title}>{article.title}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 12,
        marginVertical: 8,
        padding: 12,
        elevation: 3
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default BadgerNewsItemCard;