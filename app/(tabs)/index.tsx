import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

const DATA = [
  {
    id: "1",
    title: "Bước 1 Xác định nhu cầu khách hàng",
    description: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
    time: "20/08/2020, 06:00",
    icon: "checkmark",
  },
  {
    id: "2",
    title: "Bạn có khách hàng mới!",
    description: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
    time: "20/08/2020, 06:00",
    icon: "people",
  },
  {
    id: "3",
    title: "Khách hàng được chia sẻ bị trùng",
    description: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.",
    time: "20/08/2020, 06:00",
    icon: "people",
  },
  {
    id: "4",
    title: "Công việc sắp đến hạn trong hôm nay",
    description: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
    time: "20/08/2020, 06:00",
    icon: "checkmark",
  },
  {
    id: "5",
    title: "Công việc đã quá hạn",
    description: "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch.",
    time: "20/08/2020, 06:00",
    icon: "checkmark",
  },
];

export default function NotificationScreen() {
  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <View style={styles.iconWrap}>
        <Ionicons name={item.icon} size={18} color="#fff" />
      </View>

      <View style={styles.textWrap}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#f3f8ff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#2f80ed",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  textWrap: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
  },
  desc: {
    fontSize: 13,
    color: "#444",
    marginTop: 2,
  },
  time: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
});
