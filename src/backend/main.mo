import Time "mo:core/Time";
import Array "mo:core/Array";
import Text "mo:core/Text";
import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let submissions = List.empty<ContactSubmission>();

  let owner = Map.singleton<Nat, Principal>(0, Principal.fromText("bkyz2-fmaaa-aaaaa-qaaaq-cai"));

  public shared ({ caller }) func submitForm(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    submissions.add(submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    switch (owner.get(0)) {
      case (?admin) {
        if (caller != admin) { Runtime.trap("Only admin can access this function!") };
      };
      case (null) { Runtime.trap("Owner has not been set yet!") };
    };
    submissions.toArray();
  };
};
