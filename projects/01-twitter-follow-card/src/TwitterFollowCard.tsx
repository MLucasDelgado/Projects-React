import { useState } from "react";

type Props = {
  userName: string;
  name: string;
};

export function TwitterFollowCard({ userName, name }: Props) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const text = isFollowing ? "Siguiendo" : "Seguir";

  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de midudev"
          src={`https://unavatar.io/x/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">{`@${userName}`}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-unFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
