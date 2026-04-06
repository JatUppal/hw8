import { useEffect, useRef, useState } from "react";
import {
    Animated,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Pressable,
    Linking
} from "react-native";
import CS571 from "@cs571/mobile-client";

function BadgerArticleScreen(props) {
    const [article, setArticle] = useState(null);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fullArticleId = props.route.params.fullArticleId;

    useEffect(() => {
        setArticle(null);
        fadeAnim.setValue(0);

        fetch(`https://cs571api.cs.wisc.edu/rest/s26/hw8/article?id=${fullArticleId}`, {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
            .then(res => res.json())
            .then(data => {
                setArticle(data);

                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true
                }).start();
            });
    }, [fullArticleId]);

    if (!article) {
        return (
            <View style={styles.center}>
                <Text>The content is loading!</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Animated.View style={{ opacity: fadeAnim }}>
                <Image
                    source={{ uri: "https://raw.githubusercontent.com/CS571-S26/hw8-api-static-content/main/" + article.img }}
                    style={styles.image}
                />
                <Text style={styles.title}>{article.title}</Text>
                <Text style={styles.meta}>
                    By {article.author} on {article.posted}
                </Text>

                <Pressable onPress={() => Linking.openURL(article.url)}>
                    <Text style={styles.link}>Read full article here.</Text>
                </Pressable>

                {article.body.map((paragraph, index) => (
                    <Text key={index} style={styles.paragraph}>
                        {paragraph}
                    </Text>
                ))}
            </Animated.View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: 250,
        borderRadius: 8,
        marginBottom: 12
    },
    title: {
        fontSize: 28,
        marginBottom: 12
    },
    meta: {
        fontSize: 18,
        marginBottom: 16
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 12,
        lineHeight: 24
    },
    link: {
        fontSize: 18,
        color: "blue",
        marginBottom: 16
    }
});

export default BadgerArticleScreen;