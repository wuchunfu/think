import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { SingleColumnLayout } from 'layouts/single-column';
import { ICollaborationEditorProps, CollaborationEditor, ICollaborationRefProps } from 'tiptap/editor';
import { useUser } from 'data/user';

const Page = () => {
  const $container = useRef<HTMLDivElement>();
  const { user } = useUser();

  const { query } = useRouter();
  const { type, id } = query as { type: ICollaborationEditorProps['type']; id: string };

  return (
    <SingleColumnLayout>
      <div className="container" style={{ height: 400 }} ref={$container}>
        {type && id ? (
          <>
            {user && <CollaborationEditor menubar editable user={user} id={id} type={type} />}
            <br />
            {user && <CollaborationEditor menubar editable user={user} id={id} type={type} />}
          </>
        ) : null}
      </div>
    </SingleColumnLayout>
  );
};

export default Page;
