import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import CS571 from "@cs571/mobile-client";

import BadgerNews from './src/components/BadgerNews';
import BadgerTabs from './src/components/navigation/BadgerTabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BadgerPreferencesContext from './src/components/BadgerPreferencesContext';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [prefs, setPrefs] = useState({});

  useEffect(() => {
    fetch("https://cs571api.cs.wisc.edu/rest/s26/hw8/articles", {
      headers: {
        "X-CS571-ID": CS571.getBadgerId()
      }
    })
      .then(res => res.json())
      .then(data => {
        setArticles(data);

        const allTags = [];
        data.forEach(article => {
          article.tags.forEach(tag => {
            if (!allTags.includes(tag)) {
              allTags.push(tag);
            }
          });
        });

        const initialPrefs = {};
        allTags.forEach(tag => {
          initialPrefs[tag] = true;
        });

        setPrefs(initialPrefs);
      });
  }, []);

  return (
    <SafeAreaProvider>
     <SafeAreaView edges={['left', 'right']} style={{ flex: 1 }}>
        <BadgerPreferencesContext.Provider value={[articles, prefs, setPrefs]}>
          <NavigationContainer>
            <BadgerTabs />
          </NavigationContainer>
        </BadgerPreferencesContext.Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}