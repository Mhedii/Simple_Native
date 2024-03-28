import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.ImageSection}>
          <View>
            <Image

              source={require('./assets/Oval.png')}
            />
          </View>
          <View style={{ alignContent: 'center' }}>

            <Text style={{ fontSize: 24, fontWeight: '700' }}>
              The Octocat
            </Text>

            <Text style={{ color: 'blue' }}>
              @octocat
            </Text>
            <Text style={{ color: '#CBD5E1' }}>
              Joined 25 Jan 2011
            </Text>
          </View>
        </View>
        <View>

          <Text style={{ color: "#CBD5E1", marginVertical: 30 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum temporibus nisi saepe autem animi ipsum exercitationem voluptas facere repellat ex.</Text>
        </View>

        <View style={styles.ReposSection}>
          <View >
            <Text style={{ color: '#708090', marginBottom: 10 }}>Repos</Text>
            <Text style={{ textAlign: 'center', fontWeight: 600 }}>8</Text>
          </View>
          <View ><Text style={{ color: '#708090', marginBottom: 10 }}>Followers</Text>
            <Text style={{ textAlign: 'center', fontWeight: 600 }}>3938</Text></View>
          <View><Text style={{ color: '#708090', marginBottom: 10 }}>Follwing</Text>
            <Text style={{ textAlign: 'center', fontWeight: 600 }}>9</Text></View>
        </View>
        <View style={styles.flexItem}>
          <View>
            <Image

              source={require('./assets/003-pin.png')}
            />
          </View>
          <View>
            <Text style={{ color: '#708090' }}>
              San Francisco
            </Text>
          </View>

        </View>
        <View>
          <View style={styles.flexItem}>
            <View >
              <Image

                source={require('./assets/002-url.png')}
              />
            </View>
            <View>
              <Text style={{ color: '#708090' }}>
                https://github.blog
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.flexItem}>

          <View>
            <Image
              source={require('./assets/004-twitter.png')}
            />
          </View>
          <View>
            <Text style={{ color: '#CBD5E1' }} >
              Not Available
            </Text>
          </View>

        </View>
        <View style={styles.flexItem}>

          <View>
            <Image

              source={require('./assets/001-office-building.png')}
            />
          </View>
          <View>
            <Text style={{ color: '#708090' }}>
              @github
            </Text>
          </View>

        </View>
      </View>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5dfed',
    alignItems: 'center',
    justifyContent: 'center',

  },
  card: {
    backgroundColor: "#ffffff",
    marginHorizontal: 22,
    marginVertical: 10,
    paddingHorizontal: 25,
    paddingVertical: 50,
    flex: 1,
    borderRadius: 10
  },
  ImageSection: {

    flexDirection: 'row',
    alignItems: "center",
    gap: 20,

  },
  ReposSection: {
    backgroundColor: "#CBD5E1",
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,

    gap: 20,

  },
  flexItem: {
    flexDirection: 'row',
    gap: 20,
    alignItems: "center",
    marginTop: 10,
  }


});
