import styles from "./CustomUserTable.module.scss";
import classNames from "classnames";
import api from "@/services/api";
import { useEffect, useState } from "react";
import { EarthIcon } from "lucide-react";
import { FullscreenLoader } from "@/components/common";

const CustomUserTable = ({ openPlanetInfo }) => {
  const [triggerGetPeople, { data, isFetching }] =
    api.endpoints.getPeople.useLazyQuery();
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    if (searchName.length === 0) {
      triggerGetPeople();
      return;
    }

    const timer = setTimeout(() => {
      triggerGetPeople({
        search: searchName,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchName, triggerGetPeople]);

  return (
    <div className={styles["user-table"]}>
      <input
        className={styles["user-table__input"]}
        type="text"
        placeholder="Search by name"
        onChange={(e) => setSearchName(e.target.value)}
      />
      <div className={styles["user-table__wrapper"]}>
        <div className={styles.table} role="table">
          <div role="row" className={styles.table__row}>
            <span
              className={classNames(
                styles.table__cell,
                styles["table__cell--header"]
              )}
              role="columnheader"
            >
              Name
            </span>
            <span
              className={classNames(
                styles.table__cell,
                styles["table__cell--header"]
              )}
              role="columnheader"
            >
              Height
            </span>
            <span
              className={classNames(
                styles.table__cell,
                styles["table__cell--header"]
              )}
              role="columnheader"
            >
              Mass
            </span>
            <span
              className={classNames(
                styles.table__cell,
                styles["table__cell--header"]
              )}
              role="columnheader"
            >
              Created
            </span>
            <span
              className={classNames(
                styles.table__cell,
                styles["table__cell--header"]
              )}
              role="columnheader"
            >
              Edited
            </span>
            <span
              className={classNames(
                styles.table__cell,
                styles["table__cell--header"]
              )}
              role="columnheader"
            />
          </div>

          {isFetching && <FullscreenLoader />}

          {data?.results?.map((user) => (
            <div key={user.name} role="row" className={styles.table__row}>
              <span role="cell" className={styles.table__cell}>
                {user.name}
              </span>
              <span role="cell" className={styles.table__cell}>
                {user.height} cm
              </span>
              <span role="cell" className={styles.table__cell}>
                {user.mass} Kg
              </span>
              <span role="cell" className={styles.table__cell}>
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                }).format(new Date(user.created))}
              </span>
              <span role="cell" className={styles.table__cell}>
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                }).format(new Date(user.edited))}
              </span>
              <span role="cell" className={styles.table__cell}>
                <button onClick={() => openPlanetInfo(user.homeworld)}>
                  <EarthIcon size={16} /> View Planet
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomUserTable;
