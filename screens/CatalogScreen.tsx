import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const plants = [
  {
    id: "1",
    name: "Espada-de-São-Jorge",
    benefit: "Purifica o ar. Resistente e fácil de realizar manutenção.",
    cultivation: "Forma de cultivo: sol indireto, rega semanal.",
    image: require("../assets/images/Espada.jpg"),
  },
  {
    id: "2",
    name: "Lírio-da-paz",
    benefit: "Filtra toxinas do ambiente e melhora a qualidade do ar.",
    cultivation: "Forma de cultivo: ambiente úmido e luz difusa.",
    image: require("../assets/images/Lírio-da-paz.png"),
  },
  {
    id: "3",
    name: "Jiboia",
    benefit: "Absorve poluentes, ideal para ambientes internos, fácil de cuidar.",
    cultivation: "Forma de cultivo: luz moderada, rega quando o solo estiver seco.",
    image: require("../assets/images/jiboia.png"),
  },
  {
    id: "4",
    name: "Samambaia",
    benefit: "Aumenta a umidade do ar, traz sensação de frescor.",
    cultivation: "Forma de cultivo: ambientes úmidos, sombra parcial.",
    image: require("../assets/images/Samambaia.png"),
  },
  {
    id: "5",
    name: "Babosa (Aloe Vera)",
    benefit: "Melhora o ar, com propriedades medicinais e cicatrizantes.",
    cultivation: "Forma de cultivo: sol direto, rega espaçada.",
    image: require("../assets/images/Babosa.png"),
  },
];

export default function CatalogScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell, { textAlign: "center" }]}>
            Imagem
          </Text>
          <Text style={[styles.cell, styles.headerCell, { textAlign: "center" }]}>
            Nome
          </Text>
          <Text style={[styles.cell, styles.headerCell]}>Benefícios</Text>
          <Text style={[styles.cell, styles.headerCell]}>Forma de cultivo</Text>
        </View>

        {plants.map((item) => (
          <View key={item.id} style={styles.row}>
            <View style={[styles.cell, styles.imageCell]}>
              <Image source={item.image} style={styles.image} resizeMode="cover" />
            </View>
            <View style={styles.nameCellContainer}>
              <Text style={styles.nameCell}>{item.name}</Text>
            </View>
            <Text style={styles.cell}>{item.benefit}</Text>
            <Text style={styles.cell}>{item.cultivation}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f2e6",
    padding: 8,
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
  },
  headerRow: {
    backgroundColor: "#b2d8b2",
  },
  cell: {
    flex: 1,
    padding: 8,
    textAlignVertical: "center",
  },
  headerCell: {
    fontWeight: "bold",
    color: "#2f4f4f",
  },
  imageCell: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  nameCellContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  nameCell: {
    textAlign: "center",
  },
});
