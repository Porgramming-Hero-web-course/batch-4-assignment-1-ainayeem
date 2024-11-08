{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(profile: Profile, key: Partial<Profile>): Profile {
    return { ...profile, ...key };
  }

  // Sample Input :
  const myProfile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  console.log(updateProfile(myProfile, { age: 26 }));
}
