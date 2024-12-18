import React, { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet, ScrollView } from "react-native";

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [isCounting, setIsCounting] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    console.log("Component Did Mount");
    return () => {
      console.log("Component Will Unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Component Did Update: Count berubah menjadi", count);
    setHistory((prevHistory) => [...prevHistory, count]);
  }, [count]);

  useEffect(() => {
    let timer;
    if (isCounting) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isCounting]);

  const changeCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
    setHistory([]);
    setElapsedTime(0);
  };

  const toggleCounting = () => {
    setIsCounting(!isCounting);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lifecycle Counter</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Update Count" 
          onPress={changeCount}
          color="#4CAF50" 
        />
        <Button 
          title="Reset Count" 
          onPress={resetCount}
          color="#f44336" 
        />
        <Button
          title={isCounting ? "Stop Timer" : "Start Timer"}
          onPress={toggleCounting}
          color="#2196F3"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.countText, { color: count > 10 ? '#f44336' : '#2196F3' }]}>
          Count: {count}
        </Text>
        <Text style={styles.timerText}>⏱️ {elapsedTime} seconds</Text>
      </View>
      <Text style={styles.historyTitle}>📝 History</Text>
      <ScrollView style={styles.historyContainer}>
        {history.map((value, index) => (
          <Text key={index} style={styles.historyItem}>
            Count #{index + 1}: {value}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    gap: 10,
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerText: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
    color: '#666',
    textAlign: 'center',
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: '#333',
    marginBottom: 10,
  },
  historyContainer: {
    maxHeight: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  historyItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    color: '#666',
    fontSize: 16,
  }
});

export default Lifecycle;