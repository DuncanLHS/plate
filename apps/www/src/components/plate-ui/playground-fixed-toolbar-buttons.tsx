import React from 'react';

import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import { CommentsPlugin } from '@udecode/plate-comments';
import { useEditorReadOnly } from '@udecode/plate-common/react';
import { EmojiPlugin } from '@udecode/plate-emoji';
import {
  FontBackgroundColorPlugin,
  FontColorPlugin,
} from '@udecode/plate-font';
import { ListStyleType } from '@udecode/plate-indent-list';
import { IndentListPlugin } from '@udecode/plate-indent-list/react';
import { ListPlugin } from '@udecode/plate-list';
import {
  BulletedListPlugin,
  NumberedListPlugin,
} from '@udecode/plate-list/react';
import { ImagePlugin } from '@udecode/plate-media/react';
import { TablePlugin } from '@udecode/plate-table';

import { CheckPlugin } from '@/components/context/check-plugin';
import { Icons, iconVariants } from '@/components/icons';
import { AlignDropdownMenu } from '@/registry/default/plate-ui/align-dropdown-menu';
import { ColorDropdownMenu } from '@/registry/default/plate-ui/color-dropdown-menu';
import { CommentToolbarButton } from '@/registry/default/plate-ui/comment-toolbar-button';
import { EmojiDropdownMenu } from '@/registry/default/plate-ui/emoji-dropdown-menu';
import { IndentListToolbarButton } from '@/registry/default/plate-ui/indent-list-toolbar-button';
import { IndentTodoToolbarButton } from '@/registry/default/plate-ui/indent-todo-toolbar-button';
import { IndentToolbarButton } from '@/registry/default/plate-ui/indent-toolbar-button';
import { LineHeightDropdownMenu } from '@/registry/default/plate-ui/line-height-dropdown-menu';
import { LinkToolbarButton } from '@/registry/default/plate-ui/link-toolbar-button';
import { ListToolbarButton } from '@/registry/default/plate-ui/list-toolbar-button';
import { MarkToolbarButton } from '@/registry/default/plate-ui/mark-toolbar-button';
import { MediaToolbarButton } from '@/registry/default/plate-ui/media-toolbar-button';
import { OutdentToolbarButton } from '@/registry/default/plate-ui/outdent-toolbar-button';
import { TableDropdownMenu } from '@/registry/default/plate-ui/table-dropdown-menu';
import { ToggleToolbarButton } from '@/registry/default/plate-ui/toggle-toolbar-button';
import { ToolbarGroup } from '@/registry/default/plate-ui/toolbar';

import { PlaygroundInsertDropdownMenu } from './playground-insert-dropdown-menu';
import { PlaygroundModeDropdownMenu } from './playground-mode-dropdown-menu';
import { PlaygroundMoreDropdownMenu } from './playground-more-dropdown-menu';
import { PlaygroundTurnIntoDropdownMenu } from './playground-turn-into-dropdown-menu';

export function PlaygroundFixedToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <div className="w-full">
      <div
        className="flex"
        style={{
          // Conceal the first separator on each line using overflow
          transform: 'translateX(calc(-1px))',
        }}
      >
        {!readOnly && (
          <>
            <ToolbarGroup noSeparator>
              <PlaygroundInsertDropdownMenu />

              <CheckPlugin id="basicnodes">
                <PlaygroundTurnIntoDropdownMenu />
              </CheckPlugin>
            </ToolbarGroup>

            <ToolbarGroup>
              <MarkToolbarButton nodeType={BoldPlugin.key} tooltip="Bold (⌘+B)">
                <Icons.bold />
              </MarkToolbarButton>
              <MarkToolbarButton
                nodeType={ItalicPlugin.key}
                tooltip="Italic (⌘+I)"
              >
                <Icons.italic />
              </MarkToolbarButton>
              <MarkToolbarButton
                nodeType={UnderlinePlugin.key}
                tooltip="Underline (⌘+U)"
              >
                <Icons.underline />
              </MarkToolbarButton>

              <CheckPlugin id="basicnodes">
                <MarkToolbarButton
                  nodeType={StrikethroughPlugin.key}
                  tooltip="Strikethrough (⌘+⇧+M)"
                >
                  <Icons.strikethrough />
                </MarkToolbarButton>
                <MarkToolbarButton
                  nodeType={CodePlugin.key}
                  tooltip="Code (⌘+E)"
                >
                  <Icons.code />
                </MarkToolbarButton>
              </CheckPlugin>

              <CheckPlugin id="font">
                <ColorDropdownMenu
                  nodeType={FontColorPlugin.key}
                  tooltip="Text Color"
                >
                  <Icons.color
                    className={iconVariants({ variant: 'toolbar' })}
                  />
                </ColorDropdownMenu>
                <ColorDropdownMenu
                  nodeType={FontBackgroundColorPlugin.key}
                  tooltip="Highlight Color"
                >
                  <Icons.bg className={iconVariants({ variant: 'toolbar' })} />
                </ColorDropdownMenu>
              </CheckPlugin>
            </ToolbarGroup>

            <ToolbarGroup>
              <CheckPlugin id="align">
                <AlignDropdownMenu />
              </CheckPlugin>

              <CheckPlugin id="lineheight">
                <LineHeightDropdownMenu />
              </CheckPlugin>

              <CheckPlugin id="indentlist" plugin={IndentListPlugin}>
                <IndentListToolbarButton nodeType={ListStyleType.Disc} />
                <IndentListToolbarButton nodeType={ListStyleType.Decimal} />
                <IndentTodoToolbarButton />
              </CheckPlugin>

              <CheckPlugin id="list" plugin={ListPlugin}>
                <ListToolbarButton nodeType={BulletedListPlugin.key} />
                <ListToolbarButton nodeType={NumberedListPlugin.key} />
              </CheckPlugin>

              <CheckPlugin id={['indent', 'list', 'indentlist']}>
                <OutdentToolbarButton />
                <IndentToolbarButton />
              </CheckPlugin>
            </ToolbarGroup>

            <ToolbarGroup>
              <CheckPlugin id="link">
                <LinkToolbarButton />
              </CheckPlugin>

              <CheckPlugin id="toggle">
                <ToggleToolbarButton />
              </CheckPlugin>

              <CheckPlugin id="media">
                <MediaToolbarButton nodeType={ImagePlugin.key} />
              </CheckPlugin>

              <CheckPlugin id={['table', 'tableMerge']} plugin={TablePlugin}>
                <TableDropdownMenu />
              </CheckPlugin>

              <CheckPlugin id="emoji" plugin={EmojiPlugin}>
                <EmojiDropdownMenu />
              </CheckPlugin>

              <PlaygroundMoreDropdownMenu />
            </ToolbarGroup>
          </>
        )}

        <div className="grow" />

        <ToolbarGroup noSeparator>
          <CheckPlugin id="comment" plugin={CommentsPlugin}>
            <CommentToolbarButton />
          </CheckPlugin>
          <PlaygroundModeDropdownMenu />
        </ToolbarGroup>
      </div>
    </div>
  );
}
