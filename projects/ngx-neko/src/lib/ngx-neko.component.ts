import { Component, computed, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Component({
  selector: 'ngx-neko',
  standalone: true,
  imports: [],
  templateUrl: `ngx-neko.component.html`,
  styleUrl: `ngx-neko.component.css`,
})
export class NgxNekoComponent {
  readonly #document = inject(DOCUMENT);

  readonly ngx_neko = signal<Animal[]>([
    {
      id: 1,
      class: 'ngx-neko ngx-neko--01',
      topRate: 0.1,
      leftRate: 0.1,
    },
    {
      id: 2,
      class: 'ngx-neko ngx-neko--02',
      topRate: 0.2,
      leftRate: 0.2,
    },
    {
      id: 3,
      class: 'ngx-neko ngx-neko--03',
      topRate: 0.3,
      leftRate: 0.3,
    },
    {
      id: 4,
      class: 'ngx-neko ngx-neko--04',
      topRate: 0.5,
      leftRate: 0.5,
    },
    {
      id: 5,
      class: 'ngx-neko ngx-neko--05',
      topRate: 0.7,
      leftRate: 0.7,
    },
  ]);

  // ページ遷移完了がトリガー
  readonly #router = inject(Router);
  readonly #navigationEnd = toSignal(
    this.#router.events.pipe(filter((event) => event instanceof NavigationEnd)),
  );

  // 猫がいるかの判定
  readonly #catExistsRate = signal(0.5);
  readonly #catExists = computed(() => {
    if (this.#navigationEnd() !== undefined) {
      return this.#catExistsRate() <= Math.random();
    } else {
      return false;
    }
  });
  constructor() {
    effect(() => {
      const html = this.#document.getElementsByTagName('html').item(0);
      if (html !== null) {
        if (this.#catExists()) {
          html.attributeStyleMap.set(
            'cursor',
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAxNDMgMTQ1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTA4LjI0OCA3OC42NjkxQzEwNy40NjQgNjYuMjc4OCAxMTQuNDI0IDUyLjU5NzkgMTIzLjc5MiA0OC4xMTIzQzEzMy4xNiA0My42MjY1IDE0MS4zOSA1MC4wMzQzIDE0Mi4xNzQgNjIuNDI0NkMxNDIuOTU4IDc0LjgxNSAxMzUuOTk4IDg4LjQ5NTkgMTI2LjYzIDkyLjk4MTRDMTE3LjMyNyA5Ny40MzU3IDEwOS4xMzQgOTEuMTUwNSAxMDguMjYzIDc4Ljg5MjQiIGZpbGw9IiMwMzAwMDAiLz4KPHBhdGggZD0iTTEwOC4yNDggNzguNjY5MUMxMDcuNDY0IDY2LjI3ODggMTE0LjQyNCA1Mi41OTc5IDEyMy43OTIgNDguMTEyM0MxMzMuMTYgNDMuNjI2NSAxNDEuMzkgNTAuMDM0MyAxNDIuMTc0IDYyLjQyNDZDMTQyLjk1OCA3NC44MTUgMTM1Ljk5OCA4OC40OTU5IDEyNi42MyA5Mi45ODE0QzExNy4zMjcgOTcuNDM1NyAxMDkuMTM0IDkxLjE1MDUgMTA4LjI2MyA3OC44OTI0IiBzdHJva2U9IiMwOTAwMDAiIHN0cm9rZS13aWR0aD0iMS40NzgyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik03Ny40MjUgNDEuNjMyNUM3My40OTMxIDI4LjcxNDUgNzguMzM3IDEyLjEwODcgODguMjQ0MiA0LjU0MjI1Qzk4LjE1MTIgLTMuMDIzNjIgMTA5LjM3IDEuMzE1NDYgMTEzLjMwMiAxNC4yMzM4QzExNy4yMzQgMjcuMTUxOCAxMTIuMzkgNDMuNzU3NiAxMDIuNDgzIDUxLjMyNEM5Mi42NDU2IDU4LjgzNjcgODEuNDk5NCA1NC42MTY5IDc3LjQ5NzMgNDEuODY0OSIgZmlsbD0iIzA2MDAwMCIvPgo8cGF0aCBkPSJNNzcuNDI1IDQxLjYzMjVDNzMuNDkzMSAyOC43MTQ1IDc4LjMzNyAxMi4xMDg3IDg4LjI0NDIgNC41NDIyNUM5OC4xNTEyIC0zLjAyMzYyIDEwOS4zNyAxLjMxNTQ2IDExMy4zMDIgMTQuMjMzOEMxMTcuMjM0IDI3LjE1MTggMTEyLjM5IDQzLjc1NzYgMTAyLjQ4MyA1MS4zMjRDOTIuNjQ1NiA1OC44MzY3IDgxLjQ5OTQgNTQuNjE2OSA3Ny40OTczIDQxLjg2NDkiIHN0cm9rZT0iIzA5MDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjU2MTk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTY2LjYwOTUgMjAuMDQ2NkM3MS4yNjE0IDMzLjQwMjEgNjcuOTcxNiA0OC42NTQ5IDU5LjI2MTUgNTQuMTE1NUM1MC41NTE0IDU5LjU3NiAzOS43MTk4IDUzLjE3NjEgMzUuMDY3OSAzOS44MjA2QzMwLjQxNjEgMjYuNDY1IDMzLjcwNTggMTEuMjEyMiA0Mi40MTU5IDUuNzUxNjdDNTEuMTI2IDAuMjkxMTQzIDYxLjk1NzYgNi42OTEwNSA2Ni42MDk1IDIwLjA0NjZaIiBmaWxsPSIjMDMwMDAwIiBzdHJva2U9IiMwOTAwMDAiIHN0cm9rZS13aWR0aD0iMS40MzUwNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy4wNzYgODUuNzU5NEMzLjc3MzAxIDc4LjM1ODcgLTEuNDQ0ODggNjIuODgxNCAxLjQyMTQgNTEuMTg5OUM0LjI4Nzc4IDM5LjQ5ODUgMTQuMTUzIDM2LjAyMDMgMjMuNDU2MyA0My40MjFDMzIuNzU5MyA1MC44MjE4IDM3Ljk3NzIgNjYuMjk5MSAzNS4xMTA5IDc3Ljk5MDVDMzIuMjY0NyA4OS41OTk3IDIyLjUwOTYgOTMuMTI0NiAxMy4yNDQ2IDg1Ljg5MTYiIGZpbGw9IiMwOTAwMDAiLz4KPHBhdGggZD0iTTEzLjA3NiA4NS43NTk0QzMuNzczMDEgNzguMzU4NyAtMS40NDQ4OCA2Mi44ODE0IDEuNDIxNCA1MS4xODk5QzQuMjg3NzggMzkuNDk4NSAxNC4xNTMgMzYuMDIwMyAyMy40NTYzIDQzLjQyMUMzMi43NTkzIDUwLjgyMTggMzcuOTc3MiA2Ni4yOTkxIDM1LjExMDkgNzcuOTkwNUMzMi4yNjQ3IDg5LjU5OTcgMjIuNTA5NiA5My4xMjQ2IDEzLjI0NDYgODUuODkxNiIgc3Ryb2tlPSIjMDkwMDAwIiBzdHJva2Utd2lkdGg9IjEuMzgxMTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTkuOTEgMTA1LjgzQzE2LjA2ODQgMTExLjA5IDE2LjE1NjcgMTIyLjIzMyAyMC42Mzc2IDEyOC4xOTdDMzAuODc2NiAxNDEuODI0IDUyLjIzODYgMTQzLjE5OCA2OS4yNjQ2IDE0NC4wMTlDODcuNDY5NiAxNDQuODk2IDExMS4yMDEgMTQ2LjM2NCAxMjIuNjQ3IDEzMi4xNzlDMTI2LjE2MyAxMjcuODIxIDEyNC45MiAxMjAuNTM3IDEyMi43MzYgMTE1LjM4MUMxMTkuMzk5IDEwNy40OTkgMTEwLjE2OSAxMDMuNzQ1IDEwNC4yMDEgOTcuNjA5Qzk4LjkxNjQgOTIuMTc1NCA5NS44MTc3IDgzLjkyIDg4LjkyNjEgODAuNzY1Qzc4Ljg1NjEgNzYuMTU0OSA2Ni4xODAxIDc2LjM0NTYgNTUuNzA5MSA3OS45NTQzQzUwLjI3ODkgODEuODI1NyA0Ny4wMzYzIDg3LjUwODIgNDIuNDAwMSA5MC44OTgzQzM1LjUzNTEgOTUuOTE3MSAyNy41OTUyIDk5LjQxMzEgMjAuOTgzMiAxMDQuNzU5QzIwLjU5MDQgMTA1LjA3NyAxOS45MTE3IDEwNS44MzEgMTkuOTExNyAxMDUuODMxTDE5LjkxIDEwNS44M1oiIGZpbGw9ImJsYWNrIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjAuODk3MDIiLz4KPC9zdmc+Cg=='), pointer",
          );
        } else {
          html.attributeStyleMap.delete('cursor');
        }
      }
    });
  }
}

interface Animal {
  id: number;
  class: string;
  topRate: number;
  leftRate: number;
}
