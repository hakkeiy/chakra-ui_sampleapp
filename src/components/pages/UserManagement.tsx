/*eslint-disable react-hooks/exhaustive-deps */
import {
  Center,
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";

import { UserCard } from "../organism/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();

  const onClickUser = () => useCallback(() => onOpen(), []);

  useEffect(() => getUsers(), []);
  let SpinnerNum: number = 100;

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Wrap p={{ base: 4, md: 10 }}>
            {[...Array(SpinnerNum)].map(() => (
              <WrapItem>
                <Spinner size="lg" />
              </WrapItem>
            ))}
          </Wrap>
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <p>テスト</p>
        </ModalContent>
      </Modal>
    </>
  );
});
