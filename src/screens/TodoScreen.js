import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
    const [modal, setModal] = useState(false);

    const saveHandler = (title) => {
        onSave(todo.id, title);
        setModal(false);
    }

    return (
        <View>
            <EditModal onSave={saveHandler} value={todo.title} visible={modal} onCancel={goBack} />
            
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button color = "red" title="Ред." onPress={() => setModal(true)} />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Назад" color="red" onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button title="Удалить" color="red" onPress={() => onRemove(todo.id)} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        width: "40%"
    },
    title: {
        fontSize: 20
    }
});