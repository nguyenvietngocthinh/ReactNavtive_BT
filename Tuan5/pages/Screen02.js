import * as React from "react";
import { Button, TextInput } from "react-native";

export default function Screen02({ navigation, route }) {
  const [postText, setPostText] = React.useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: "Screen01",
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}