import { UnFollow } from "../api/authorization";

interface Prop {
  setFollowing: (value: boolean) => void;
  id: number;
}

function UnFollowBtn({ setFollowing, id }: Prop) {
  return (
    <button
      onClick={async () => {
        setFollowing(false);
        await UnFollow(id);
      }}
      className="text-sm font-bold text-gray-300 border-gray-500 px-4 rounded mr-1 border "
    >
      UnFollow
    </button>
  );
}

export default UnFollowBtn;
